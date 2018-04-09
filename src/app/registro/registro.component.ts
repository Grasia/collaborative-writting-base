import {Component, OnInit} from '@angular/core';
import { SwellService } from '../swell.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
  


@Component({
  selector: 'app-registro',
  styleUrls: ['registro.component.css'],
  templateUrl: 'registro.component.html',
})
export class RegistroComponent {

    error = "";

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    
    matcher = new MyErrorStateMatcher();

    constructor(private service: SwellService, private route: ActivatedRoute, private router: Router) {

    }

    isError():boolean{

        if(this.error == "") return false;
        else return true;

    }

    crear(user, realName, pass, mail) {
        
               
        if(user != "" && realName != "" && pass != ""){
            if (mail == ""){
                console.log('Sin mail')
                this.service.get().createUser({
                    id: user,
                    name: realName,
                    password: pass,
                })
                .then( user => {console.log("usuario añadido"); 
                                this.router.navigate(['/login'], {replaceUrl: true}); } )
                .catch( error => { this.error = "El nombre de usuario ya existe" });
            }else {
                console.log('Con mail');
                this.service.get().createUser({
                    id: user,
                    name: realName,
                    password: pass,
                    email: mail,
                })
                .then( user => {console.log("usuario añadido");
                                this.router.navigate(['/login'], {replaceUrl: true});})
                .catch( error => {this.error = "El nombre de usuario ya existe" });
            }
        }else this.error = "Complete los campos obligatorios";
    }

}
