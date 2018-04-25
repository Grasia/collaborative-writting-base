import { Component, OnInit } from '@angular/core';
import { DocService } from '../doc.service';
import { SwellService } from '../swell.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-opinar',
  templateUrl: './opinar.component.html',
  styleUrls: ['./opinar.component.css']
})
export class OpinarComponent implements OnInit {
  object:any;
  selected = 'no';
  send:string;
  anotacion:any;
  constructor(private swell:SwellService, private user: UserService) { }

  ngOnInit() {

    this.send = "";
  }


  comentar(voto, opinion):void{

    console.log(voto);
    console.log(opinion);
    console.log(this.swell.getAnotacion());;
    console.log(this.swell.getObject().node('comments'));

    this.swell.getObject()
    .node('comments')
    .node(this.swell.getAnotacion().value)
    .node('posts')
    .add({
      participant: this.user.getName + "@local.net",
      datetime: (new Date()).getTime(),
      vote: voto,
      text: opinion
    });

    

  }

  enviado():boolean{

    if(this.send = ""){

      return false;

    }else return true;

  }

}


