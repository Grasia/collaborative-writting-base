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
    console.log(this.editor.getAnnotations('mapa', this.service.getSwell().Range.ALL).mapa);
    var range = this.service.getSwell().Range.ALL;
    var comentarios: any;
    this.totalComentarios = 0;
    console.log(range);
    console.log(anotaciones);
    this.editor.clearAnnotation('mapa', this.service.getSwell().Range.ALL);
    console.log(this.editor.getAnnotations('mapa', this.service.getSwell().Range.ALL).mapa);

    for(var i = 0; i < anotaciones.length; i++){
      comentarios = this.service.getObject().node('comments').node(anotaciones[i].value).get('posts');
      for(var j = 0; j < comentarios.length; j++){

        this.totalComentarios++;

      }

    }

    console.log(this.totalComentarios);

    if(anotaciones){
      for(var i = 0; i < anotaciones.length; i++){
        var voto = 0;
        var aux: any;
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
        }

        var anotRange = {

          start: anotaciones[i].range.start,
          end: anotaciones[i].range.end

        };

        console.log(anotRange);

        console.log(this.totalComentarios * 0.5);
        console.log(this.totalComentarios * 0.3);

        if(voto > 0){
          console.log(voto);
          if(voto > this.totalComentarios * 0.50){

            aux = this.editor.setAnnotation('mapa', '+3', anotRange);

          }else if(voto > this.totalComentarios * 0.30 && voto <= this.totalComentarios * 0.50 ){

            aux = this.editor.setAnnotation('mapa', '+2', anotRange);

          }else aux = this.editor.setAnnotation('mapa', '+1', anotRange);

          
        }else{
          console.log(voto*-1);
          if(voto * -1 > this.totalComentarios * 0.50){

            aux = this.editor.setAnnotation('mapa', '-3', anotRange);

          }else if(voto * -1 > this.totalComentarios * 0.30 && voto <= this.totalComentarios * 0.50 ){

            aux = this.editor.setAnnotation('mapa', '-2', anotRange);

          }else aux = this.editor.setAnnotation('mapa', '-1', anotRange);
        }
        console.log(aux);

      }
    }

    //this.editor.clearAnnotation('mapa', this.service.getSwell().Range.ALL);
    

  

  }

  ngOnInit(){

    
    this.object = this.service.getObject();

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
    this.editor.edit(true);
    this.mapaCalor();
    this.editor.edit(false);

  }

  limpiarMapa(){
    console.log("Antes:" +this.editor.getAnnotations('mapa', this.service.getSwell().Range.ALL).mapa);
    this.editor.clearAnnotation('mapa', this.service.getSwell().Range.ALL);
    console.log("Despues:" +this.editor.getAnnotations('mapa', this.service.getSwell().Range.ALL).mapa);
  }

  ngOnDestroy(){

    this.editor.edit(true);
    this.limpiarMapa();
    this.editor.edit(false);

    this.editor.clean();

  }

}
