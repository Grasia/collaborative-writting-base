import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocService } from '../doc.service';
import { SwellService } from '../swell.service';

declare let document:any;

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit, OnDestroy{

  editor:any;
  text:any;
  object:any;

  constructor(private docService:DocService, private service:SwellService) { }

  ngOnInit() {
      this.object = this.service.getObject();
      this.service.getSwell().Editor.configure({});
      if(this.editor == null) this.editor = this.service.getSwell().Editor.create(document.getElementById("editor"));
      this.text = this.service.getSwell().Text.create("Texto vacio");
      if(!this.object.node('text')){

        this.object.set('text', this.text);

      }
      
      this.text = this.service.getObject().get('text');
      this.editor.set(this.text);
      this.editor.edit(true);
      
  }

  ngOnDestroy(): void {
    
    this.editor.clean();
    
  }

    getTexto(){
        
        return this.docService.getTexto();
        
    }
    
    
}
