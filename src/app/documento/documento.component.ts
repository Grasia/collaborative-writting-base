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
    
    constructor(private route: ActivatedRoute,
               private docService: DocService,
                 private userService: UserService
               ){};
    
    
    ngOnInit(){
        
        this.doc = this.docService.getDoc(+this.route.snapshot.paramMap.get('id'));
       /* const documento = +this.route.snapshot.paramMap.get('id');
        this.docService.getDoc(documento)
            .subscribe(doc => this.doc = doc);
        */
    }
    
    isLog(){
        
        
        return this.userService.isLog();
        
    }
  
}
