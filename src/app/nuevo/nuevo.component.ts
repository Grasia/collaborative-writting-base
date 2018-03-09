import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { DocService } from '../doc.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.component.html',
  styleUrls: ['nuevo.component.css'],
})
export class NuevoComponent implements OnInit{
    
    error:boolean;

    constructor(private docService:DocService,
                private userService:UserService,
                private location:Location,
                private router:Router
                ){}
    
    ngOnInit(){
  
        this.error = false;
        
    }
  
    
    getId():number{
        
        return this.docService.activo.id;
        
    }

    crear(titulo):void{
        
        if (!titulo){
            
            this.error = true;
            
        }else{
            
            this.docService.add(titulo, "jorge");
            this.router.navigate(['/documento/'+this.docService.activo.id], { replaceUrl: true });
            //this.location.go('/documento/'+this.docService.activo.id, '');
            
            
        }
        
        
    }
    
}

