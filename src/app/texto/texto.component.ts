import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocService } from '../doc.service';
import { SwellService } from '../swell.service';
import { isUndefined } from 'util';

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
  select:any;
  anotacion:any;

  constructor(private docService:DocService, private service:SwellService) { }



  ngOnInit() {
      
      this.object = this.service.getObject();
      this.service.getSwell().Editor.configure({});
      this.service.getSwell().Editor.AnnotationRegistry.define('comment');
      if(this.editor == null) this.editor = this.service.getSwell().Editor.create(document.getElementById("editor"));
      this.text = this.service.getSwell().Text.create("Texto vacio");

      
      if(!this.object.node('text')){

        this.object.set('text', this.text);

      }
      
      this.text = this.service.getObject().get('text');
      this.editor.set(this.text);
      this.editor.edit(true);


      this.editor.setSelectionHandler((range, editor, selection) => {

        
        console.log("Seleccion hecha");
        
        console.log(this.editor.getAnnotations("comment") == undefined);
        

       /* if(this.editor.getAnnotations("comment") == undefined){
            console.log("no existe esa anotacion aun")
            this.editor.setAnnotation("Coment", "'" + (Math.random()*10000) + "'");
            this.anotacion = this.editor.getAnnotations("comment");
            var id = this.editor.getAnnotations("coment").value;

            (Preguntar a pablo porque 2 veces el id);
            this.object.node("comments").add(<id>, {id: "ejemplo",
                                                  posts:[]});

        }else{

         console.log("ya existe la anotacion");
         //muestra a la derecha los comentarios y en caso de poder comentar, el panel para ello.
         mostrarComentarios();

          
        }
        
        
        //Todo esto va ahora en una funcion a parte, ya que es añadir un comentario.

        //si this.object.get("coments.id.post.this.use") devuelve algo valido, no se podra añadir comentario.
        this.object.node("coments").node("this.id").node("posts").add({
            participant: "this.user",
            datetime: "",
            vote: "positive",
            text: "Comentario del participante"
        })

        
        */
      });

      
  }

  ngOnDestroy(): void {
    
    this.editor.clean();
    
  }

    getTexto(){
        
        return this.docService.getTexto();
        
    }
    
    
}
