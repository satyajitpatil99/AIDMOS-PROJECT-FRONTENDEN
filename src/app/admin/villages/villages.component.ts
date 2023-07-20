import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-villages',
  templateUrl: './villages.component.html',
  styleUrls: ['./villages.component.css']
})
export class VillagesComponent implements OnInit {
  id: any;
  talukaid:any;
  taluka:any;
  formdata:any;
  result: any;

  constructor(private api: ApiService, private route:ActivatedRoute) { 
    this.talukaid = this.route.snapshot.paramMap.get("talukaid");
  }
  ngOnInit(): void {
    this.api.get("talukas/0/" + this.talukaid).subscribe((result: any) => {
      this.taluka = result;      
    })
    this.load();
  }

  load() {
    this.id = null;
    this.formdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.compose([Validators.required])),
      talukaid: new FormControl(Number(this.talukaid)),
      isdefault: new FormControl("No")
    })
    this.api.get("villages/" + this.talukaid).subscribe((result: any) => {
      this.result = result;      
    })
  }

  Save(data: any) {
    if (this.id == null) {
      this.api.post("villages", data).subscribe((result: any) => {
        this.api.showMessage({title:"Success", type:"success", message:this.api.insert_success_msg});
        this.load();
      })
    }
    else {
        this.api.put("villages/" + this.id, data).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.update_success_msg});
          this.load();
        });
    }
  }

  edit(id: number) {
    this.id = id;
    this.api.get("villages/" + this.talukaid + "/" + id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: result.id,
        name: result.name,
        talukaid: result.talukaid
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
        this.api.delete("villages/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })
  }
}
