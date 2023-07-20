import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  
  id: any;
  scheduledata: any;
  schedules: any;

  constructor(private api: ApiService) { }
  ngOnInit(): void {


    this.load();
  }

  load() {
    // this.id = null;
    this.scheduledata = new FormGroup({
      // id: new FormControl(0),
      srno: new FormControl("", Validators.compose([Validators.required])),
      type: new FormControl(""),
      name: new FormControl("", Validators.compose([Validators.required])),
    })

    this.api.get("AccSchedules").subscribe((result: any) => {
      this.schedules = result;
      console.log(result);
    })
  }

  Save(data: any) {
    console.log(data);
    if (this.id == null) {
      this.api.post("AccSchedules", data).subscribe((result: any) => {
        alert("Schedule Details Added.")
        this.load();
      })
    }
    else {
      if (confirm("Are You Sure To Update Information")) {
        this.api.put("AccSchedules/" + this.id, data).subscribe((result: any) => {
          this.load();
        })
      }
    }
  }

  edit(id: number) {
    this.id = id;

    this.api.get("AccSchedules/" + id).subscribe((result: any) => {
      this.scheduledata.patchValue({
        id: result.id,
        srno: result.srno,
        typeid: result.type,
        name: result.name
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
        this.api.delete("AccSchedules/"+ id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })

  }

}
