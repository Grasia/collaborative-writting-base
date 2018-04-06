import {Component, OnInit} from '@angular/core';
import { SwellService } from '../swell.service';

@Component({
  selector: 'app-registro',
  styleUrls: ['registro.component.css'],
  templateUrl: 'registro.component.html',
})
export class RegistroComponent{
   
    private service:any;
    private error: boolean;

    constructor(private swellService: SwellService){}

    ngOnInit(){
        
        this.swellService.getInstancePromise();
        this.service = this.swellService.getService();
        this.error = false;
        
    }
    
    crear(usuario, nombre, contraseña){

        this.service.createUser({
            id: usuario,
            name: nombre,
            password: contraseña
        })

    }

}