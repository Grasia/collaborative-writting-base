import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { SwellService } from '../swell.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-opinar',
  templateUrl: './opinar.component.html',
  styleUrls: ['./opinar.component.css']
})
export class OpinarComponent implements OnInit {
  object:any;
  selected = 'no';
  send:string;
  anotacion:any;
  idCom:any;
  constructor(private swell:SwellService, private user: UserService) { }

  ngOnInit() {

    this.send = "";
  }


  comentar(voto, opinion):void{

    console.log(voto);
    console.log(opinion);
    console.log(this.swell.getAnotacion());

    console.log(this.swell.tieneComentarios());

    if (!this.swell.tieneComentarios()) {
      console.log("if");
      // OJO, user siempre mismo clave 'comment'
      // para convertir a string, sobra con concatenar con '',
      // aunque he añadido un prefijo 'c' para mejorar comprension
      this.idCom = 'c' + parseInt('' + (Math.random() * 10000), 10);

      // otro posible id podría ser el timestamp
      // const idComentario = 'c' + (new Date()).getTime();

      // la anotacion nos devuelve el setAnnotation()
      console.log(this.swell.getRange());
      this.anotacion = this.swell.getEditor().setAnnotation('comment', this.idCom, this.swell.getRange());
      this.swell.setAnotacion(this.anotacion);
      console.log(this.anotacion);
      this.configuraNodoComentarios(this.swell.getObject());
      this.configuraNodoDeComentario(this.swell.getObject(), this.idCom);


    } else {
        console.log("else");
        //Aqui habra que comprobar si ese usuario ya ha hecho un comentario en esa anotacion.
        this.anotacion = this.swell.getEditor().getAnnotations('comment', this.swell.getRange()).comment[0];
        this.swell.setAnotacion(this.anotacion);
        console.log(this.anotacion);
      
    }

    var nombre = this.user.getName() + "@local.net";

    console.log(nombre);
    console.log(this.anotacion.value);

  

    this.swell.getObject()
    .node('comments')
    .node(this.anotacion.value)
    .push('posts', 
    {
      participant: nombre,
      datetime: (new Date()).getTime(),
      vote: voto,
      text: opinion
    });


    console.log("comentario añadido");
    console.log(this.swell.getObject().node('comments').node(this.swell.getAnotacion().value).get('posts'));

  }

  configuraNodoComentarios(object: any) {

    if (!object.node('comments')) {
      object.set('comments', this.swell.getSwell().Map.create());
      console.log('ha creado comments');
    } else {
      console.log('Comments ya existia');
    }

  }

  configuraNodoDeComentario(object: any, idComentario: string) {


    if (object.node('comments').node(idComentario)) {
      return;
    }

    // para nodos de tipo map usar mejor métodos put() y pick()
    object.node('comments').put(idComentario, this.swell.getSwell().Map.create());
    const comentarioMap = object.node('comments').node(idComentario);

    // para asegurarnoºs de que se crean todas las propiedades correctamente,
    // crear las propiedades del hilo de comentario en llamadas separadas
    comentarioMap.put('id', idComentario);
    comentarioMap.put('posts', this.swell.getSwell().List.create());

    console.log('Configurado nodo para comentario ' + idComentario);
    console.log(comentarioMap.get());
    console.log(object.node('comments').node(idComentario));
    console.log(object.node('comments').node(idComentario).node('posts'));
  }

  enviado():boolean{

    if(this.send = ""){

      return false;

    }else return true;

  }

}


