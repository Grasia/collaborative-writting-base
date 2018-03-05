import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  
    constructor(private docService: DocService){};
  
    ngOnInit(){
        
        
        
    }
    
    comprueba(doc, rol): boolean{
        
        if(doc == rol) return true;
        return false;
        
        
    }
    
}
