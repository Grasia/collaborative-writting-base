import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-toggle',
  templateUrl: 'toggle.component.html',
  styleUrls: ['toggle.component.css'],
})
export class ToggleComponent implements OnInit{

    private checked:boolean;
    private color:string;
    
    constructor(private userService: UserService){}
  
    ngOnInit(){
  
    
        if(this.userService.isAdmin()){
            this.checked = true;
        }else this.checked = false;
        this.color = "primary"
        
        if(this.checked){
        
            this.userService.setRol("admin");
        
        }else this.userService.setRol("user");
        
    }
  
    isChecked(){
  
        return this.checked;
  
    }

    col():string{
    
        return this.color;
    
    }
    
    changeRol():void{
    
        if(this.userService.isAdmin()){
        
            this.userService.setRol("user");
        
        }else{
        
            this.userService.setRol("admin");
        
        }
    
    }

    rol():string{

        if(this.userService.getRol() == "admin"){

            return "Mis documentos";

        }else return "Participando";

    }
  
}

