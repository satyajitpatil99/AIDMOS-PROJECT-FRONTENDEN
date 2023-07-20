import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  
  id: any;
  businessdata: any;
  businesses: any;

  constructor(private api: ApiService) { }
  ngOnInit(): void {


    this.load();
  }

  load() {
    this.id = null;
    this.businessdata = new FormGroup({
      id: new FormControl(0),
      businessname: new FormControl(""),
      ownername: new FormControl(""),
      regdate: new FormControl(""),
      villageid: new FormControl(2),
      mobileno: new FormControl(""),
      altmobileno: new FormControl(""),
      email: new FormControl(""),
      status: new FormControl(""),
      address: new FormControl(""),
    })

    this.api.get("businesses").subscribe((result: any) => {
      this.businesses = result;
    })
  }

  Save(data: any) {
    console.log(data);
    if (this.id == null) {
      this.api.post("businesses", data).subscribe((result: any) => {
        alert("Business Details Added.")
        this.load();
      })
    }
    else {
      if (confirm("Are You Sure To Update Information")) {
        this.api.put("businesses/" + this.id, data).subscribe((result: any) => {
          this.load();
        })
      }
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
