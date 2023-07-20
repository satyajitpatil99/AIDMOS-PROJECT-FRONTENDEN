import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-usermodulemapping',
  templateUrl: './usermodulemapping.component.html',
  styleUrls: ['./usermodulemapping.component.css']
})
export class UsermodulemappingComponent implements OnInit {

  userid = 0;
  users:any;
  modules:any;

  constructor(private api:ApiService)
  {
   
  }

  ngOnInit(): void {
    this.api.get("users/0").subscribe((result:any)=>{
      this.users = result;
    });
  }

  load(){
    if(this.userid == 0){
      this.modules = null;
    }
    else{
      this.api.get("users/modules/" + this.userid).subscribe((result:any)=>{
        this.modules = result;
      });
    }
  }

  handleCheck(event:Event, module:any){
    let ctrl = <HTMLInputElement>event.target;
    if(ctrl.checked){
      this.api.post("users/addmodule/" + this.userid + "/" + module.id, null).subscribe((result:any)=>{
        this.modules = result;
        this.api.showMessage({title:"Success", message:"Module Assigned", type:"success"});
      })
    }else{
      this.api.delete("users/removemodule/" + this.userid + "/" + module.mappingid).subscribe((result:any)=>{
        this.modules = result;
        this.api.showMessage({title:"Success", message:"Module Removed", type:"success"});
      })
    }
  }
}
