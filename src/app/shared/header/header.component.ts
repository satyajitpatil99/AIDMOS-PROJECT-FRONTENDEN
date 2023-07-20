import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  business:any;
  name:any;

  constructor(private api:ApiService, private router:Router){
    if(localStorage.getItem("id") == null){
      this.router.navigate(["/"]);
    }
    this.business = JSON.parse(localStorage.getItem("business") || "{}");
    this.name = localStorage.getItem("name") || "";
  }

  toggleNavbar(event:Event){
    //collapsed
    let ctrl = document.getElementsByClassName("js-sidebar")[0];
    ctrl.classList.toggle("collapsed");
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/"]);
  }

}
