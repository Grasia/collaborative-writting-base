import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SwellService } from '../swell.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private userService: UserService, private service: SwellService){}
  
  isLog():boolean{
  
    
    return this.userService.isLog()
  
  
  }
  
  logout():void{
  
    this.service.get().logout({
      id : this.userService.getName() + "@local.net"
    })
    .then( profile => { console.log("logout correcto") })
    .catch( error => {console.log("error logout")});
    this.userService.logout();
    
  
  }
  
  isAdmin() : boolean{
    
        
    return this.userService.isAdmin();
    
    
  }
  
  ngOnInit(){}
  
}