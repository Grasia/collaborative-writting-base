import { DocService } from '../doc.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

    constructor(private docService:DocService,
                private router:Router,
                private userService:UserService) { }

    ngOnInit() {
    }

    siguiente():void{
        
        this.router.navigate([this.docService.next()], { replaceUrl: true });
        
    }
    
    
    getFase():string{

        return this.docService.getFase();


    }

    getTitulo():string{

        return this.docService.getTitulo();

    }


    isAdmin():boolean{
        
        return this.userService.isAdmin();
        
    }
    
    documentos():void{
        
        this.router.navigate(['/documento'], { queryParams: { id: this.getId() , x:'0' } });
        
    }

    
    getId():number{

        return this.docService.getId();

    }

}
