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
private comentarios: boolean;
private editor:any;
private range:any;
private selection:any;


public setEditor(ed):void{

    this.editor = ed;

}
public setRange(r):void{

    this.range  = r;

}

public getRange():any{

    return this.range;

}

public setSelection(s):void{

    this.selection = s;

}

public getEditor():any{

    return this.editor;

}

public tieneComentarios():boolean{

    return this.comentarios;

}

public setComentarios(com):void{

    this.comentarios = com;

}

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
                    swell.Editor.configure({});
                    swell.Editor.AnnotationRegistry.define('mapa', 'map', {});
                    swell.Editor.AnnotationRegistry.define('comment', 'com', {});
                    
                    console.log("Hecho la config");
                    resolve(this.service);

                });

                setTimeout(() => { reject(new Error('Error loading swellrt client: timeout'));
                }, 15000);
            });
    }

}
