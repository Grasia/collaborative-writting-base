import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from '../doc';
import { DocService } from '../doc.service';
import { UserService } from '../user.service'

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})



export class DocumentoComponent implements OnInit{
  
    @Input() doc: Doc;
    error: string;
    
    constructor(private route: ActivatedRoute,
               private docService: DocService,
                 private userService: UserService
               ){};
    
    
    ngOnInit(){
        
        this.doc = this.docService.getDoc(+this.route.snapshot.paramMap.get('id'));
        this.docService.activarDoc(this.doc);
       /* const documento = +this.route.snapshot.paramMap.get('id');
        this.docService.getDoc(documento)
            .subscribe(doc => this.doc = doc);
        */
    }
    
    isLog(){
        
        
        return this.userService.isLog();
        
    }
    
    etapa(){
        
        return this.doc.etapa;
        
        
    }
    
    isAdmin(){
        
        return this.userService.isAdmin();
        
    }
    
    mostrar(){
        
        if(this.isLog()){
            
            if (this.userService.isAdmin()){
                
                if(this.doc.creador == this.userService.getName()){
                    
                    return true;
                    
                }else this.error = "No eres administrador de este documento";
                
            }else{
                
                if(this.doc.participante == this.userService.getName()){
                    
                    return true;
                    
                }else this.error = "No eres usuario de este documento"
                
            }
            
            
        }else this.error = "No has hecho login"
        
        return false;
        
    }
  
}
