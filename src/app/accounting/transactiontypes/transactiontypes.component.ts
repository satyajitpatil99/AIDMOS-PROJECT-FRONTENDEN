import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transactiontypes',
  templateUrl: './transactiontypes.component.html',
  styleUrls: ['./transactiontypes.component.css']
})
export class TransactiontypesComponent implements OnInit {

  transactiontypedata:any;
  transactiontypes:any;
  id:any;

  constructor(private api:ApiService){}


  ngOnInit(): void {

    this.load();

    this.api.get("AccTransactiontypes").subscribe((result: any) => {
      this.transactiontypes = result;
      console.log(result);

    })

  }


  load(){
    this.transactiontypedata = new FormGroup({
      id:new FormControl(0),
      srno:new FormControl("",Validators.compose([Validators.required])),
      name:new FormControl("",Validators.compose([Validators.required])),
      checkin:new FormControl("",Validators.compose([Validators.required])),
      navigateto:new FormControl("",Validators.compose([Validators.required]))
    })
  }

  save(data: any) {
    console.log(data);
    if (this.id == null) {
      this.api.post("AccTransactiontypes",data).subscribe((result: any) => {
        alert("Menus Details Added.")
         this.load();
      })
    }
    else {
      if (confirm("Are You Sure To Update Information")) {
        this.api.put("AccTransactiontypes/" + this.id, data).subscribe((result: any) => {
          this.load();
        })
      }
    }
  }

  edit(id: number) {
    this.id = id;

    this.api.get("AccTransactiontypes/" + id).subscribe((result: any) => {
      this.transactiontypedata.patchValue({
        id: result.id,
        srno:result.srno,
        name:result.name,
        checkno:result.checkin,
        nevigateto:result.navigateto
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
        this.api.delete("AccTransactiontypes/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })

  }

}
