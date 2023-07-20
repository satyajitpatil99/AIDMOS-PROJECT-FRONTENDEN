import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AIDMOS_FrontEnd';

  constructor(private api:ApiService, private router:Router){
    // this.router.events.subscribe((ev) => {
    //   if (ev instanceof NavigationEnd) { /* Your code goes here on every router change */
    //   this.api.loadJsFile("assets/js/app.js");
    // }
    // });
  }
}
