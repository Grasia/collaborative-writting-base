import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Coment } from '../coment'
@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {

    opinion:boolean;
    comentarios: string;
    coments: Coment[];

    constructor(private docService:DocService,
                private router:Router,
                private userService:UserService) { }

    ngOnInit() {

        this.opinion = false;
        this.coments = [];
    }

    vaciarComentarios(){

        this.coments = [];

    }

    isComent(){

        
        if(this.coments[0]) return true;
        return false;

    }

    llenarComentarios(com){
        
        for(var i = 0; i < com.length; i++){
            
            this.coments[this.coments.length] = { text: com[i].text, name: com[i].participant};
                     
        }

    }
    
    isAdmin():boolean{
        
        return this.userService.isAdmin();
        
    }
    
    mostrar():boolean{
        
        if(!this.isAdmin()){
            if(this.docService.getFase() == "revision") return true;
        }
        return false;
        
    }
    
    opinar():void{

        this.opinion = true;

    }

    noOpinar():void{

        this.opinion = false;

    }

    isOpinar():boolean{

        return this.opinion;

    }

    isCambios():boolean{

        if(this.docService.getFase() == 'cambios') return true;
        else return false;

    }

    isFin():boolean{

        if(this.docService.getFase() == 'fin') return true;
        else return false;

    }

    getFase():string{

        return this.docService.getFase();


    }

    siguiente():void{
        
        this.router.navigate([this.docService.next()], { replaceUrl: true });
        
    }
    
    documentos():void{
        
        this.router.navigate(['/documento'], { queryParams: { id: this.getId(), x:'0' } });
        
    }


    getId():number{

        return this.docService.getId();

    }

    fin():void{
        
        this.router.navigate([this.docService.last()], { replaceUrl: true });
        
    }

}
