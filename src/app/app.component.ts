import { Component, OnInit } from '@angular/core';
import { SwellService } from './swell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Carlos y Jorge';


  constructor(private swellService: SwellService) {

  }

  ngOnInit() {

      this.swellService.promise()
      .then( service => { console.log('SwellRT is READY!');})
      .catch( error => { console.log('ERROR loading SwellRT!'); });

      
    


  }


}
