import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styleUrls: ['./llamada.component.css']
})
export class LlamadaComponent implements OnInit {

    constructor(private docService:DocService,private router:Router,
                private userService:UserService) { }

    ngOnInit() {
  }

    siguiente():void{
        
        this.docService.siguienteFase('revision');
        
    }
    
    documentos():void{
        
        this.router.navigate(['/participar'], { replaceUrl: true });
        
    }
    
    isAdmin():boolean{
        
        return this.userService.isAdmin();
        
    }
    
}
