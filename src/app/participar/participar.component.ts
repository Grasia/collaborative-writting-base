import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-participar',
  templateUrl: './participar.component.html',
  styleUrls: ['./participar.component.css']
})
export class ParticiparComponent implements OnInit{

  constructor(private userService: UserService){}
  
  isLog():boolean{
  
    
    return this.userService.isLog()
  
  
  }
  
  logout():void{
  
    this.userService.logout();
  
  }
  
  isAdmin() : string{
    
        
    return this.userService.isAdmin();
    
    
  }
  
  ngOnInit(){}
  
  
  
}