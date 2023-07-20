import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  id: any;
  villageid:any;
  village:any;
  formdata:any;
  result: any;

  constructor(private api: ApiService, private route:ActivatedRoute) { 
    this.villageid = this.route.snapshot.paramMap.get("villageid");
  }
  ngOnInit(): void {
    this.api.get("villages/0/" + this.villageid).subscribe((result: any) => {
      this.village = result;      
    })
    this.load();
  }

  load() {
    this.id = null;
    this.formdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.compose([Validators.required])),
      villageid: new FormControl(Number(this.villageid)),
      isdefault: new FormControl("No")
    })
    this.api.get("areas/" + this.villageid).subscribe((result: any) => {
      this.result = result;      
    });
  }

  Save(data: any) {
    if (this.id == null) {
      this.api.post("areas", data).subscribe((result: any) => {
        this.api.showMessage({title:"Success", type:"success", message:this.api.insert_success_msg});
        this.load();
      })
    }
    else {
        this.api.put("areas/" + this.id, data).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.update_success_msg});
          this.load();
        });
    }
  }

  edit(id: number) {
    this.id = id;
    this.api.get("areas/" + this.villageid + "/" + id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: result.id,
        name: result.name,
        villageid: result.villageid
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
        this.api.delete("areas/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })
  }
}
