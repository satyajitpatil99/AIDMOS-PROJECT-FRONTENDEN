import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit{
  formdata:any;
  groups:any;
  id:any

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.load();
   
  }

  load(){
    this.formdata = new FormGroup({
      srno:new FormControl(""),
      name:new FormControl(""),
      primarygroup:new FormControl(""),
      group:new FormControl(""),
      type:new FormControl(""),
  
      })
      this.api.get("AccGroups").subscribe((result:any)=>{
        this.groups = result;
        console.log(result);
        
      })
  
  
  
  
    
  
  }
  
  save(data:any): void{
    console.log(data);
    if(this.id == null){
    this.api.post("AccGroups", data).subscribe((result:any)=>{
      console.log(result);
      
    })
  }
  else{
    this.api.put("AccGroups/" + this.id,data).subscribe((result:any)=>{
      console.log(result);
      this.load();
      
    })
  }
    
  }
  
  edit(id: number) {
    this.api.get("AccGroups/" + id).subscribe((result: any) => {
      this.formdata.patchValue({

    srno: result.srno,
    name: result.name,
    primarygroup: result.primarygroup,
    group: result.groupid,
    type: result.type,
        
        
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
        this.api.delete("AccGroups/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })

  }


}
