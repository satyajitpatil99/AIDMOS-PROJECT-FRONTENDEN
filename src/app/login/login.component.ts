import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }
  formdata: any;

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  login(data: any) {
    this.api.post("Authentication/login", data).subscribe((result: any) => {
      if (result.length == 0) {
        this.api.showMessage({ title: "Login Failed", type: "error", message: "Invalid credentials" });
      }
      else {
        let user = result[0];
        localStorage.setItem("id", user.id);
        localStorage.setItem("name", user.name);
        localStorage.setItem("usertype", user.usertype);
        localStorage.setItem("businessid", user.businessid);
        this.api.get("businesses/" + user.businessid).subscribe((result: any) => {
          localStorage.setItem("business", JSON.stringify(result));
          this.router.navigate(['dashboard/dashboard'])
        });
      }
    });
  }
}
