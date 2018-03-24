import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styleUrls: ['./llamada.component.css']
})
export class LlamadaComponent implements OnInit {

    constructor(private docService:DocService,private router:Router,
                private userService:UserService) { }

    ngOnInit() {
  }

    siguiente():void{
        
        this.router.navigate([this.docService.next()], { replaceUrl: true });
        
    }
    
    
    getFase():string{

        return this.docService.getFase();


    }


    documentos():void{
        this.router.navigate(['/documento'], { queryParams: { id: this.getId(), x:'0' } });
        //this.router.navigate(['/documento/'+ this.docService.getId()], { replaceUrl: true });
        
    }
    
    isAdmin():boolean{
        
        return this.userService.isAdmin();
        
    }

    
    getId():number{

        return this.docService.getId();

    }

    
}
