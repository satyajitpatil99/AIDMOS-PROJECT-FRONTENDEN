import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-financialyears',
  templateUrl: './financialyears.component.html',
  styleUrls: ['./financialyears.component.css']
})
export class FinancialyearsComponent implements OnInit {
  id:any;
  
  businesses:any;
  financialdata:any;
  financiales:any;
  financialyears:any;


  constructor(private api:ApiService , router:Router){ }

   ngOnInit(): void {
   this.load();
  }

  load() {
    this.id = null;
    this.financialdata = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(""),
      
      startdate: new FormControl(""),
      enddate: new FormControl("")
      
    })

    this.api.get("financialyears").subscribe((result: any) => {
      this.financialyears =  result
    })

  }

  Save(data: any) {
    console.log(data);
    if (this.id == null) {
      this.api.post("financialyears", data).subscribe((result: any) => {
        alert("financial Details Added.")
        this.load();
      })
    }
    else {
      if (confirm("Are You Sure To Update Information")) {
        this.api.put("financialyears/" + this.id, data).subscribe((result: any) => {
          this.load();
        })
      }
    }
  }

  edit(id: number) {
    this.id = id;

    this.api.get("financialyears/" + id).subscribe((result: any) => {
      this.financialdata.patchValue({
        id: result.id,
        name: result.name,
    
        stratdate: result.stratdate,
        enddate : result.enddate
        
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
        this.api.delete("financialyears/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })

  }
}


