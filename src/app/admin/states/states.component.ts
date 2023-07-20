import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  id: any;
  formdata:any;
  result: any;

  constructor(private api: ApiService) { }
  ngOnInit(): void {


    this.load();
  }

  load() {
    this.id = null;
    this.formdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("", Validators.compose([Validators.required])),      
      isdefault: new FormControl("No"),
      gstcode: new FormControl(0,Validators.compose([Validators.required])),
    })
    this.api.get("states").subscribe((result: any) => {
      this.result = result;      
    })
  }

  Save(data: any) {
    if (this.id == null) {
      this.api.post("states", data).subscribe((result: any) => {
        this.api.showMessage({title:"Success", type:"success", message:this.api.insert_success_msg});
        this.load();
      })
    }
    else {
        this.api.put("States/" + this.id, data).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.update_success_msg});
          this.load();
        });
    }
  }

  edit(id: number) {
    this.id = id;
    this.api.get("states/" + id).subscribe((result: any) => {
      this.formdata.patchValue({
        id: result.id,
        name: result.name,
        isdefault: result.isdefault,
        gstcode: result.gstcode
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
        this.api.delete("states/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })
  }
}
