import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwellService } from '../swell.service';


@Component({
  selector: 'app-texto-analisis',
  templateUrl: './texto-analisis.component.html',
  styleUrls: ['./texto-analisis.component.css']
})
export class TextoAnalisisComponent implements OnInit, OnDestroy {

  private object: any;
  private text: any;
  private editor: any;
  private totalComentarios: number;

  constructor(private service: SwellService) { }

  selectionHandler(range, editor, selection) {

    

  }  


  mapaCalor(){
    var anotaciones =  this.editor.getAnnotations('comment', this.service.getSwell().Range.ALL).comment;
    var range = this.service.getSwell().Range.ALL;
    var comentarios: any;
    this.totalComentarios = 0;
    console.log(range);
    console.log(anotaciones);

    this.service.getSwell().Editor.AnnotationRegistry.define('negative', 'neg', {});
    aux = this.service.getEditor().setAnnotation('negative', 'c105050' , range);
    console.log("anotacion "+ aux);

    if(anotaciones){
      for(var i = 0; i < anotaciones.length; i++){
        this.editor.clearAnnotation('negative');
        this.editor.clearAnnotation('positive');
        var voto = 0;
        var aux;
        comentarios = this.service.getObject().node('comments').node(anotaciones[i].value).get('posts');
        console.log("-----anotacion " + i);
        for(var j = 0; j < comentarios.length; j++){
          console.log("--comentario " + j);
          if(comentarios[j].vote == 'positive'){

            console.log("positivo ++");
            voto++;

          }else if(comentarios[j].vote == 'negative'){

            console.log("negative ++");
            voto--;

          }
          this.totalComentarios++;
        }

        var anotRange = {

          start: anotaciones[i].range.start,
          end: anotaciones[i].range.end

        };

        console.log(anotRange);

        if(voto > 0){
          console.log("positivo " + anotaciones[i].value + " " + anotRange);
          aux = this.service.getEditor().setAnnotation('positive', 'c500', range);
          console.log("anotacion: " + aux);
        }else{
          console.log("negativo " + anotaciones[i].value + " " + anotRange);
          aux = this.service.getEditor().setAnnotation('negative', 'c105050' , range);
          console.log("anotacion "+ aux);
        }

      }
    }

    console.log(this.totalComentarios);
  

  }

  ngOnInit(){


    this.object = this.service.getObject();

    this.service.getSwell().Editor.configure({});

    this.service.getSwell().Editor.AnnotationRegistry.define('comment', 'com', {});
    console.log("comment creado");
    this.service.getSwell().Editor.AnnotationRegistry.define('positive', 'pos', {});
    console.log("positive creado");
    this.service.getSwell().Editor.AnnotationRegistry.define('negative', 'neg', {});
    console.log("negative creado");



    if (!this.editor) {
      this.editor = this.service.getSwell().Editor.create(document.getElementById('editor'));

      this.service.setEditor(this.editor);
      // establecer el selection hanlder sólo una vez,
      // despues de crear el editor.
      // para simplificar el codigo fuente, llevar el codigo
      // del handler a un meto

      this.editor.setSelectionHandler((range, editor, selection) => {
        console.log("no entra porque no es editableee");
        // this.editor.clearAnnotation('comment');
        // this.object.delete('comments');
          this.selectionHandler(range, editor, selection);

      });

    }

    this.text = this.service.getSwell().Text.create('Texto vacio');


    if (!this.object.node('text')) {
      this.object.set('text', this.text);
    }


    this.text = this.service.getObject().get('text');
    this.editor.set(this.text);
    this.editor.edit(false);

    this.mapaCalor();

  }


  ngOnDestroy(){

    this.editor.clean();

  }

}
