import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { relativeTimeThreshold } from 'moment';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent  implements OnInit {
  id: any;
  stateid:any;
  state:any;
  formdata:any;
  result: any;

  constructor(private api: ApiService, private route:ActivatedRoute) { 
    this.stateid = this.route.snapshot.paramMap.get("stateid");
  }
  ngOnInit(): void {
    this.api.get("states/" + this.stateid).subscribe((result: any) => {
      this.state = result;      
    })
    this.load();
  }

  load() {
    this.id = null;
    this.formdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.compose([Validators.required])),
      stateid: new FormControl(Number(this.stateid)),
      isdefault: new FormControl("No")
    })
    this.api.get("districts/" + this.stateid).subscribe((result: any) => {
      this.result = result;      
    })
  }

  Save(data: any) {
    if (this.id == null) {
      this.api.post("districts", data).subscribe((result: any) => {
        this.api.showMessage({title:"Success", type:"success", message:this.api.insert_success_msg});
        this.load();
      })
    }
    else {
        this.api.put("districts/" + this.id, data).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.update_success_msg});
          this.load();
        });
    }
  }

  edit(id: number) {
    this.id = id;
    this.api.get("districts/" + this.stateid + "/" + id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: result.id,
        name: result.name,
        stateid: result.stateid
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
        this.api.delete("districts/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })
  }
}
