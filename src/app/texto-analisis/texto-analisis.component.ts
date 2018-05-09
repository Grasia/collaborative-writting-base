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

  constructor(private service: SwellService) { }

  selectionHandler(range, editor, selection) {

    

  }  


  mapaCalor(){

    var range = this.service.getSwell().Range.ALL;
    console.log(range);
    console.log(this.editor.getAnnotations('comment', range).comment);

  }

  ngOnInit(){


    this.object = this.service.getObject();

    this.service.getSwell().Editor.configure({});


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
