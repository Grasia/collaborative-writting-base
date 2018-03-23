import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {

    constructor(private docService:DocService,
                private router:Router,
                private userService:UserService) { }

    ngOnInit() {
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
        
        this.router.navigate(['/participar'], { replaceUrl: true });
        
    }

    fin():void{
        
        this.router.navigate([this.docService.last()], { replaceUrl: true });
        
    }

}
