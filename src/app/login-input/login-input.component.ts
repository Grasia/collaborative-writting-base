import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-input',
  styleUrls: ['login-input.component.css'],
  templateUrl: 'login-input.component.html',
})
export class LoginInputComponent{

    private log:boolean;
    private error:boolean;
    
    constructor(private userService: UserService){}
    
    ngOnInit(){
    
        this.log = false;
        this.error = false;
    
    }
    
    login(user, pass) : void{
            this.error=false;
        if(user == "jorge" && pass == "jorge"){
        
            this.log = true;
            this.userService.add(user, "admin");
        
        }else if(user == "carlos" && pass == "carlos"){
        
            this.log = true;
            this.userService.add(user, "admin");
            
        }else{
        
            this.log=false;
            this.error=true;
        
        }
    
    }
    
    logout() : void{
    
        this.log = false;
        this.userService.logout();
    }
    

    

}