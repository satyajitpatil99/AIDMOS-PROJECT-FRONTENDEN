import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, MY_DATE_FORMATS } from 'src/app/shared/api.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})

export class BusinessesComponent implements OnInit {

  id: any;
  businessdata: any;
  businesses: any = [];
  businessid: any;

  constructor(private api: ApiService) { }
  ngOnInit(): void {


    this.load();
  }

  load() {
    this.id = null;
    this.businessdata = new FormGroup({
      id: new FormControl(0),
      businessname: new FormControl("",Validators.compose([Validators.required])),
      ownername: new FormControl("",Validators.compose([Validators.required])),
      regdate: new FormControl("",Validators.compose([Validators.required])),
      villageid: new FormControl(2),
      mobileno: new FormControl("",Validators.compose([Validators.required])),
      altmobileno: new FormControl("",Validators.compose([Validators.required])),
      email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
      status: new FormControl("active"),
      address: new FormControl("",Validators.compose([Validators.required])),
    })

    this.api.get("businesses").subscribe((result: any) => {
      this.businesses = result;
      for(let i = 0; i<this.businesses.length;i++){
        this.businessid = this.businesses[i].id + 1;
      }
      console.log(this.businessid);
    })
  }

  save(data: any) {
    if (this.id == null) {
      this.api.post("businesses", data).subscribe((result: any) => {       
        this.api.showMessage({title:"Success", message:this.api.insert_success_msg, type:"success"});
        this.load();
      })
    }
    else {
        this.api.put("businesses/" + this.id, data).subscribe((result: any) => {
          this.api.showMessage({title:"Success", message:this.api.update_success_msg, type:"success"});
          this.load();
        })
    }
  }

  edit(id: number) {
    this.id = id;
    this.api.get("businesses/" + id).subscribe((result: any) => {
      this.businessdata.patchValue({
        id: result.id,
        businessname: result.businessname,
        ownername: result.ownername,
        regdate: result.regdate,
        villageid: result.villageid,
        mobileno: result.mobileno,
        altmobileno: result.altmobileno,
        email: result.email,
        status: result.status,
        address: result.address,
      })
    })
  }

  delete(id: number) {
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
        this.api.delete("businesses/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })

  }
}
