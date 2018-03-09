import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {

  constructor(private docService:DocService) { }

  ngOnInit() {
      
      
      
  }

    getTexto(){
        
        return this.docService.getTexto();
        
    }
    
    
}
