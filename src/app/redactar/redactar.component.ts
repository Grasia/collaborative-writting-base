import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
@Component({
  selector: 'app-redactar',
  templateUrl: './redactar.component.html',
  styleUrls: ['./redactar.component.css']
})
export class RedactarComponent implements OnInit {

    constructor(private docService:DocService) { }

    ngOnInit() {
    }

    getTexto(){
        
        return this.docService.getTexto();
        
    }
    
    
    
}
