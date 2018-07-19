import { Component, OnInit } from '@angular/core';
import { SwellService } from './swell.service';
import { UserService} from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Jorge';


  constructor(private swellService: SwellService, private userService: UserService) {

  }
    

  ngOnInit() {

      this.swellService.promise()
      .then( service => { console.log('SwellRT is READY!');})
      .catch( error => { console.log('ERROR loading SwellRT!'); });

      
  }
    
    isLog(){

        return this.userService.isLog();

    }


}
