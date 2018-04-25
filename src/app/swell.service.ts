import { Injectable } from "@angular/core";
// the global swellrt namespace
declare let swell: any;
// access to window global var
declare let window: any;

@Injectable()
export class SwellService {

private service: any;
private object: any = "";
private anotacion: any;

public get(): any {
    return this.service;
}

public setAnotacion(anot){

    this.anotacion = anot;

}

public getAnotacion(){

    return this.anotacion;

}

/*public crear(){

    this.service.createUser({
        id: 'jorge',
        name: 'Jorge',
        password: 'jorge'
    })
    .then( user => {console.log(user) } )
    .catch( error => { console.log(error) } );

}*/

public getSwell(){

    return swell;

}

public setObject(obj){

    this.object = obj;

}


public getObject(){

    return this.object;

}

public login(){

    this.service.login({
        id : swell.Constants.ANONYMOUS_USER_ID + "@local.net",
        password : ''
      })
      .then( profile => {})
      .catch(error=>{});

}

public promise() {

    return new Promise((resolve, reject) => {

                if (this.service != null) {
                    resolve(this.service);
                    return;
                }

                swell.onReady((_service) => {
                    this.service = _service;
                    window.service = this.service;
                    resolve(this.service);
                });

                setTimeout(() => { reject(new Error('Error loading swellrt client: timeout'));
                }, 15000);
            });
    }

}
