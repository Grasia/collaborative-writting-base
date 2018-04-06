import {Component, OnInit} from '@angular/core';
import { SwellService } from '../swell.service';

@Component({
  selector: 'app-registro',
  styleUrls: ['registro.component.css'],
  templateUrl: 'registro.component.html',
})
export class RegistroComponent {


    constructor(private service: SwellService) {

    }

    crear(usuario, nombre, contrasena) {

        this.service.get().createUser({
            id: usuario,
            name: nombre,
            password: contrasena
        })
        .then( user => { } )
        .catch( error => { } );

    }

}
