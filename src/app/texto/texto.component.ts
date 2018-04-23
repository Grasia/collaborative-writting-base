import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocService } from '../doc.service';
import { SwellService } from '../swell.service';
import { isUndefined } from 'util';

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

  constructor(private docService: DocService, private service: SwellService) { }

  selectionHandler(range, editor, selection) {

    const anotComentarios = this.editor.getAnnotations('comment').comment;
    const tieneComentarios = anotComentarios && Array.isArray(anotComentarios) && anotComentarios.length > 0;

    console.log('Seleccion hecha. Comentarios? ' + tieneComentarios);

    if (!tieneComentarios) {
      // OJO, user siempre mismo clave 'comment'
      // para convertir a string, sobra con concatenar con '',
      // aunque he añadido un prefijo 'c' para mejorar comprension
      const idComentario = 'c' + (Math.random() * 10000);

      // otro posible id podría ser el timestamp
      // const idComentario = 'c' + (new Date()).getTime();

      // la anotacion nos devuelve el setAnnotation()
      this.anotacion = this.editor.setAnnotation('comment', idComentario);

      // (Preguntar a pablo porque 2 veces el id)
      // respuesta: repito el id por si pasas una referencia al objeto poder
      // saber siempre que comentario es

      // ojo, uso el swell.Map.create() para poder escuchar eventos en posts[]
      this.object.node('comments').add(idComentario, swell.Map.create({
        id: idComentario,
        posts: []
      }));

    } else {
      this.anotacion = anotComentarios[0];
      // muestra a la derecha los comentarios y en caso de poder comentar, el panel para ello.
      // mostrarComentarios();
    }


    // Todo esto va ahora en una funcion a parte, ya que es añadir un comentario
    // this.anotacion.value es donde está el id del comentario
    this.object.node('comments').node(this.anotacion.value).node('posts').add({
      participant: 'usuario?',
      datetime: (new Date()).getTime(),
      vote: 'positive',
      text: 'Comentario del participante'
    });

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
      this.editor.setSelectionHandler(this.selectionHandler);
    }

    this.text = this.service.getSwell().Text.create('Texto vacio');


    if (!this.object.node('text')) {
      this.object.set('text', this.text);
    }

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
