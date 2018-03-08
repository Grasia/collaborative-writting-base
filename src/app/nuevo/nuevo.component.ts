import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { DocService } from '../doc.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: 'nuevo.component.html',
  styleUrls: ['nuevo.component.css'],
})
export class NuevoComponent implements OnInit{
    
    error:boolean;

    constructor(private docService:DocService,
                private userService:UserService
                ){}
    
    ngOnInit(){
  
        this.error = false;
        
    }
  

    crear(titulo):void{
        
        if (!titulo){
            
            this.error = true;
            
        }else{
            
            this.docService.add(titulo, "jorge");
            
        }
        
        
    }
    
}

