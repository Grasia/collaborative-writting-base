import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  rol: string="";
  user: string="";
  login:boolean=false;
  
  
  add(user: string, admin:string) {
  
    this.login=true;
    this.rol = admin;
    this.user = user;

  }

  isAdmin(){
    
    return this.rol;
  
  }
  
  logout(){
  
    this.login=false;
    this.rol = "";
    this.user="";

  
  }
  
  isLog(){
  
    return this.login;
  
  }
  
  setRol(rol:string){
  
    this.rol=rol;
  
  }


}

