import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private userService: UserService){}
  
  isLog():boolean{
  
    
    return this.userService.isLog()
  
  
  }
  
  logout():void{
  
    this.userService.logout();
  
  }
  
  isAdmin() : boolean{
    
        
    return this.userService.isAdmin();
    
    
  }
  
  ngOnInit(){}
  
}