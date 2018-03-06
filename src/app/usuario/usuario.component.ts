import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  
    constructor(private docService: DocService,
                private userService: UserService){};
  
    ngOnInit(){
        
        
        
    }
    
    comprueba(doc): boolean{
        
        if(doc.participante == this.userService.getName()) return true;
        return false;
        
        
    }
    
}
