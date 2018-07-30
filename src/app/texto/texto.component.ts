import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocService } from '../doc.service';
import { SwellService } from '../swell.service';
import { isUndefined } from 'util';
import { RevisionComponent } from '../revision/revision.component';
import { UserService } from '../user.service';

declare let window: any; // para depuracion sucia en consola
declare let document: any;

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

  constructor(private docService: DocService, private service: SwellService, 
    private general: RevisionComponent, private user: UserService) { }


  /**
   * Crea el nodo donde almacenar comentarios si es necesario.
   * TODO esta función puede ser estática, moverla a una clase o servicio 
   * con la lógica de negocio de nuestro objeto
   * @param object
   */
  configuraNodoComentarios(object: any) {
    if (!object.node('comments')) {
      object.set('comments', this.service.getSwell().Map.create());
      console.log('ha creado comments');
    } else {
      console.log('Comments ya existia');
    }

  }

  /**
   * Crea un nodo dentro de object.node('comments') donde
   * almacenar el hilo de comentarios con el id correspondiente
   * @param object
   */
  configuraNodoDeComentario(object: any, idComentario: string) {


    if (object.node('comments').node(idComentario)) {
      return;
    }

    // para nodos de tipo map usar mejor métodos put() y pick()
    object.node('comments').put(idComentario, this.service.getSwell().Map.create());
    const comentarioMap = object.node('comments').node(idComentario);

    // para asegurarnoºs de que se crean todas las propiedades correctamente,
    // crear las propiedades del hilo de comentario en llamadas separadas
    comentarioMap.put('id', idComentario);
    comentarioMap.put('posts', this.service.getSwell().List.create());

    console.log('Configurado nodo para comentario ' + idComentario);
    console.log(comentarioMap.get());
    console.log(object.node('comments').node(idComentario));
    console.log(object.node('comments').node(idComentario).node('posts'));
  }

  selectionHandler(range, editor, selection) {
    this.general.vaciarComentarios();
    this.service.setRange(range);
    console.log('Seleccion capturada en rango ' + range);
    // recoge anotaciones en ese rango si las tiene;
    console.log(this.service.getSwell().Range.ALL);
    const anotComentarios = this.editor.getAnnotations('comment').comment;

    // si hay anotacion y dentro de la anotacion hay comentarios concretos.
    const tieneComentarios = anotComentarios && Array.isArray(anotComentarios) && anotComentarios.length > 0;
    this.service.setComentarios(tieneComentarios);



    if(tieneComentarios){
      console.log(anotComentarios[0].value);
      console.log(this.service.getObject().node('comments').node(anotComentarios[0].value).get('posts'));
      for(var i = 0; i < anotComentarios.length; i++){
        
        this.general.llenarComentarios(this.service.getObject().node('comments').node(anotComentarios[i].value).get('posts'));
        
      }
      
    }


    console.log('Comentarios en la seleccion? ' + tieneComentarios);
    console.log(anotComentarios);

    // selección vacia, no hacer nada
    if (range.start === range.end) {
      console.log('seleccion de caca');
      this.general.noOpinar();
      return;
    }

    
    this.service.setObject(this.object);

    if(tieneComentarios){
      console.log("primer if");
      
      if(this.isComment(this.service.getObject().node('comments').node(anotComentarios[0].value).get('posts'))){

        console.log('llamando a opinar');
        this.general.opinar();
        
      }else console.log('no opinas, porque ya has opinao mamon');

    }else this.general.opinar();

    // Todo esto va ahora en una funcion a parte, ya que es añadir un comentario
    // this.anotacion.value es donde está el id del comentario


  }


  isComment(comments){

    console.log(comments);
    console.log(comments[0].participant);
    console.log(this.user.getName());

    for(var i = 0; i < comments.length; i++){

      if(comments[i].participant == this.user.getName() + "@local.com"){

        return true;

      }

    }
    return false;

  }

  ngOnInit() {

    this.object = this.service.getObject();
    window.object = this.object; // Solo para depurar
    //this.service.getSwell().Editor.configure({});

    // define() requiere tres parametros
    //this.service.getSwell().Editor.AnnotationRegistry.define('comment', 'com', {

     

    //});

    if (!this.editor) {
      
      this.editor = this.service.getSwell().Editor.create(document.getElementById('editor'));
      this.service.setEditor(this.editor);
      // establecer el selection hanlder sólo una vez,
      // despues de crear el editor.
      // para simplificar el codigo fuente, llevar el codigo
      // del handler a un metodo

      this.editor.setSelectionHandler((range, editor, selection) => {

        //this.editor.clearAnnotation('comment');
        //this.editor.clearAnnotation('mapa');
        //this.object.delete('comments');
        this.selectionHandler(range, editor, selection);

      });

    }

    this.text = this.service.getSwell().Text.create('Texto vacio');

    if (!this.object.node('text')) {
      this.object.set('text', this.text);
    }


    console.log(this.object.node('text'));
    this.text = this.service.getObject().get('text');
    this.editor.set(this.text);
    this.editor.edit(true);
    console.log("deberias porder editar");
    

  }

  ngOnDestroy(): void {

    this.editor.clean();

  }

  getTexto() {

    return this.docService.getTexto();

  }


}
