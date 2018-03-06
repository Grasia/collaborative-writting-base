import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  
    constructor(private docService: DocService,
                private userService: UserService){};
  
    ngOnInit(){
        
        
        
    }
    
    comprueba(doc): boolean{
        
        if(doc.creador == this.userService.getName()) return true;
        return false;
        
        
    }
  
}
