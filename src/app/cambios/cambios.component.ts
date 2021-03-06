import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-cambios',
  templateUrl: './cambios.component.html',
  styleUrls: ['./cambios.component.css']
})
export class CambiosComponent implements OnInit {

    constructor(private docService:DocService,private router:Router,
                private userService:UserService) { }

    ngOnInit() {
    }

    siguiente():void{
        
        this.router.navigate([this.docService.next()], { replaceUrl: true });
        
    }
    
    isAdmin():boolean{
        
        return this.userService.isAdmin();
        
    }
    
    fin():void{
        
        this.router.navigate([this.docService.last()], { replaceUrl: true });
        
    }
    
    documentos():void{
        
        this.router.navigate(['/participar'], { replaceUrl: true });
        
    }
    
}
