import { Injectable } from '@angular/core';
import { User } from './user'

@Injectable()
export class UserService {
  login:boolean=false;
  user: User = {nombre:'', rol:''};

  add(nombre: string, rol:string) {
  
    this.login=true;
    this.user.rol = rol;
    this.user.nombre = nombre;

  }

  isAdmin(){
    
      if (this.user.rol == 'admin') return true;
      return false;
    
  
  }
  
  logout(){
  
    this.login=false;
    this.user.rol = "";
    this.user.nombre="";

  
  }
  
  isLog(){
  
    return this.login;
  
  }
  
  setRol(rol:string){
  
    this.user.rol=rol;
  
  }


  getName(){
      
      return this.user.nombre;
      
  }
    

}

