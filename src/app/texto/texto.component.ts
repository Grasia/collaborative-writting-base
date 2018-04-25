import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocService } from '../doc.service';
import { SwellService } from '../swell.service';
import { isUndefined } from 'util';
import { RevisionComponent } from '../revision/revision.component';
import { UserService } from '../user.service';

declare let document: any;
declare let swell: any;

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})

export class TextoComponent implements OnInit, OnDestroy {

  editor: any;
  text: any;
  object: any;
  select: any;
  anotacion: any;
  idComentario: string;

  constructor(private docService: DocService, private service: SwellService, private general: RevisionComponent, private user: UserService) { }

  selectionHandler(range, editor, selection){
    console.log(range);
    //recoge anotaciones en ese rango si las tiene;
    const anotComentarios = this.editor.getAnnotations('comment').comment;
    
    //si hay anotacion y dentro de la anotacion hay comentarios concretos.
    const tieneComentarios = anotComentarios && Array.isArray(anotComentarios) && anotComentarios.length > 0;

    console.log('Seleccion hecha. Comentarios? ' + tieneComentarios);
    console.log(anotComentarios);

    if(range.start != range.end){
      if (!tieneComentarios) {
        console.log("if");
        // OJO, user siempre mismo clave 'comment'
        // para convertir a string, sobra con concatenar con '',
        // aunque he añadido un prefijo 'c' para mejorar comprension
        this.idComentario = 'c' + (Math.random() * 10000);

        // otro posible id podría ser el timestamp
        // const idComentario = 'c' + (new Date()).getTime();

        // la anotacion nos devuelve el setAnnotation()
        this.anotacion = this.editor.setAnnotation('comment', this.idComentario);

        // (Preguntar a pablo porque 2 veces el id)
        // respuesta: repito el id por si pasas una referencia al objeto poder
        // saber siempre que comentario es

        // ojo, uso el swell.Map.create() para poder escuchar eventos en posts[]
        
        if (!this.object.node("comments")){

          this.object.set('comments', this.service.getSwell().Map.create());
          console.log("ha creado comments");



        }else{
          console.log("Comments ya existia");
        }

        console.log('creado comments se supone');
        

        /*this.object.node('comments').set(this.idComentario, this.service.getSwell().Map.create());
        console.log(this.object.node('coments').node(this.idComentario).value());
        this.object.node('comments').node(this.idComentario).set('id', this.idComentario);
        this.object.node('comments').node(this.idComentario).set('posts', this.service.getSwell().List.create());*/
        this.object.node('comments').set(this.idComentario, this.service.getSwell().Map.create(
        { 
          id: this.idComentario,
          posts: this.service.getSwell().List.create(),
            
        }));
        console.log("Llega aqui se supone que existe comments");

      } else {
        this.anotacion = anotComentarios[0];
        this.service.setAnotacion(this.anotacion.value);
        console.log(this.object.node("comments"));
        console.log("else" + this.anotacion.value);
        // muestra a la derecha los comentarios y en caso de poder comentar, el panel para ello.
        // mostrarComentarios();
      }

      console.log("llamando a opinar");
      this.service.setObject(this.object);
      this.general.opinar();
      
    }else{
       console.log("seleccion de caca");
       this.general.noOpinar();
    }
    // Todo esto va ahora en una funcion a parte, ya que es añadir un comentario
    // this.anotacion.value es donde está el id del comentario


  }


  ngOnInit() {

    this.object = this.service.getObject();
    this.service.getSwell().Editor.configure({});

    // define() requiere tres parametros
    this.service.getSwell().Editor.AnnotationRegistry.define('comment', 'cc', {});

    if (!this.editor) {
      this.editor = this.service.getSwell().Editor.create(document.getElementById('editor'));

      // establecer el selection hanlder sólo una vez,
      // despues de crear el editor.
      // para simplificar el codigo fuente, llevar el codigo
      // del handler a un metodo
      
      this.editor.setSelectionHandler((range, editor, selection)=>{
        
        //this.editor.clearAnnotation('comment');
        //this.object.delete('comments');
        this.selectionHandler(range, editor, selection);

      });
      
    }

    this.text = this.service.getSwell().Text.create('Texto vacio');


    if (!this.object.node('text')) {
      this.object.set('text', this.text);
      
    }

    console.log(this.object.node("text"));
    this.text = this.service.getObject().get('text');
    this.editor.set(this.text);
    this.editor.edit(true);

  }

  ngOnDestroy(): void {

    this.editor.clean();

  }

  getTexto() {

    return this.docService.getTexto();

  }


}
