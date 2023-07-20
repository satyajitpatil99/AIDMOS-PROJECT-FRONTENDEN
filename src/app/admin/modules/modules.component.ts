import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  formdata: any;
  result: any;
  id: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.id = null;
    this.formdata = new FormGroup({
      id:new FormControl(0),
      title: new FormControl('', Validators.compose([Validators.required])),
      description: new FormControl(''),
      selectimage: new FormControl(""),
      landingpage: new FormControl('', Validators.compose([Validators.required])),
      srno: new FormControl(0, Validators.compose([Validators.required])),
    })
    this.api.get("modules").subscribe((result: any) => {
      this.result = result;
      this.formdata.patchValue({
        srno: result.length + 1,
      })
    })
  }

  save(data: any) {
    if (this.id == null) {
      this.api.post("modules", data).subscribe((result: any) => {
        this.api.showMessage({ title: "Success", type: "success", message: this.api.insert_success_msg });
        this.load();
      })
    }
    else {
      this.api.put("modules/" + this.id, data).subscribe((result: any) => {
        this.api.showMessage({ title: "Success", type: "success", message: this.api.update_success_msg });
        this.load();
      })
    }
  }

  edit(id: number) {
    this.id = id;
    this.api.get("Modules/" + id).subscribe((data: any) => {
      this.formdata.patchValue({
        id: data.id,
        title: data.title,
        description: data.description,
        selectimage: data.selectimage,
        landingpage: data.landingpage,
        srno: data.srno,
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
        this.api.delete("modules/" + id).subscribe((result: any) => {
          this.api.showMessage({ title: "Success", type: "success", message: this.api.delete_success_msg });
          this.load();
        })
      }
    })
  }
}
