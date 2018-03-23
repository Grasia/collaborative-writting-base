import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-redaccion',
  templateUrl: './redaccion.component.html',
  styleUrls: ['./redaccion.component.css']
})
export class RedaccionComponent implements OnInit {

    constructor(private docService:DocService,private router:Router,
                private userService:UserService) { }

    ngOnInit() {
      }
    
    siguiente():void{
        
        this.router.navigate([this.docService.next()], { replaceUrl: true });
        
    }
    
    documentos():void{
        
        this.router.navigate(['/participar'], { replaceUrl: true });
        
    }
    
    isAdmin():boolean{
        
        return this.userService.isAdmin();
        
    }
    
}
