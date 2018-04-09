import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { SwellService } from '../swell.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-input',
  styleUrls: ['login-input.component.css'],
  templateUrl: 'login-input.component.html',
})
export class LoginInputComponent{

    private log:boolean;
    private error:boolean;
    
    constructor(private userService: UserService, private service: SwellService, private router: Router){}
    
    ngOnInit(){
    
        this.log = false;
        this.error = false;
    
    }
    
    login(user, pass) : void{

        /*    this.error=false;
        if(user == "jorge" && pass == "jorge"){
        
            this.log = true;
            this.userService.add(user, "admin");
        
        }else if(user == "carlos" && pass == "carlos"){
        
            this.log = true;
            this.userService.add(user, "admin");
            
        }else{
        
            this.log=false;
            this.error=true;
        
        }*/

        this.service.get().login({
            id : user + "@local.net",
            password : pass
          })
          .then( profile => {   console.log("Login correcto"); 
                                this.log = true; 
                                this.error = false; 
                                this.userService.add(user, "admin");
                                this.router.navigate(['/participar'], {replaceUrl: true});})

          .catch( error => {console.log("Error en el login"); this.error = true;});
    
    }
    
    logout() : void{
    
        this.log = false;
        this.userService.logout();
    }
    
    isLog(){

        return this.userService.isLog();

    }
    

}