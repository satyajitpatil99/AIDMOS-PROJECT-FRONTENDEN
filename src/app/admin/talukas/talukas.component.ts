import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-talukas',
  templateUrl: './talukas.component.html',
  styleUrls: ['./talukas.component.css']
})
export class TalukasComponent implements OnInit {
  id: any;
  districtid:any;
  district:any;
  formdata:any;
  result: any;

  constructor(private api: ApiService, private route:ActivatedRoute) { 
    this.districtid = this.route.snapshot.paramMap.get("districtid");
  }
  ngOnInit(): void {
    this.api.get("districts/0/" + this.districtid).subscribe((result: any) => {
      this.district = result;      
    })
    this.load();
  }

  load() {
    this.id = null;
    this.formdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.compose([Validators.required])),
      districtid: new FormControl(Number(this.districtid)),
      isdefault: new FormControl("No")
    })
    this.api.get("talukas/" + this.districtid).subscribe((result: any) => {
      this.result = result;      
    })
  }

  Save(data: any) {
    if (this.id == null) {
      this.api.post("talukas", data).subscribe((result: any) => {
        this.api.showMessage({title:"Success", type:"success", message:this.api.insert_success_msg});
        this.load();
      })
    }
    else {
        this.api.put("talukas/" + this.id, data).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.update_success_msg});
          this.load();
        });
    }
  }

  edit(id: number) {
    this.id = id;
    this.api.get("talukas/" + this.districtid + "/" + id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: result.id,
        name: result.name,
        districtid: result.districtid
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
        this.api.delete("talukas/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })
  }
}
