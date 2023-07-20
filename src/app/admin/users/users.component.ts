import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  id:any;
  businessid:any;
  business:any;
  userdata:any;
  users:any;

  constructor(private route:ActivatedRoute, private api:ApiService){
    this.businessid = this.route.snapshot.paramMap.get('businessid');
  }

  ngOnInit(): void {
    this.api.get("businesses/" + this.businessid).subscribe((result:any)=>{
      this.business = result;
    });
    this.load();
  }

  load(){
    this.id = null;
    this.userdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("",Validators.compose([Validators.required])),
      usertype: new FormControl("Owner",Validators.compose([Validators.required])),
      mobileno: new FormControl("",Validators.compose([Validators.required])),
      email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
      username: new FormControl("",Validators.compose([Validators.required])),
      password: new FormControl("",Validators.compose([Validators.required])),
      businessid: new FormControl(this.businessid),
    })
    this.api.get("users/" + this.businessid).subscribe((result:any)=>{
      this.users = result;
    })
  }

  save(data:any){    
    if (this.id == null) {
      this.api.post("users", data).subscribe((result: any) => {
        this.api.showMessage({title:"Success", message:this.api.insert_success_msg, type:"success"});
        this.load();
      })
    }
    else {
      this.api.put("users/" + this.id, data).subscribe((result: any) => {
        this.api.showMessage({title:"Success", message:this.api.update_success_msg, type:"success"});
        this.load();
      })
    }
  }

  edit(id:number){
    this.id = id;
    this.api.get("users/" + this.businessid + "/" + id).subscribe((result: any) => {
      this.userdata.patchValue({
        id: result.id,
        name: result.name,
        usertype: result.usertype,
        mobileno: result.mobileno,
        email: result.email,
        username: result.username,
        password: result.password,
        businessid: result.businessid,
      })
    })
  }

  delete(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("users/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })
  }
}
