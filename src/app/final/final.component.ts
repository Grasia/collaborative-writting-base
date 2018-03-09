import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

    constructor(private router:Router,
                private userService:UserService) { }

    ngOnInit() {
    }

    documentos():void{
        
        this.router.navigate(['/participar'], { replaceUrl: true });
        
    }
    
}
