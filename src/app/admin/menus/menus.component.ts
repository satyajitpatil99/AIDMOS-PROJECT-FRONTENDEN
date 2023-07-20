import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menudata:any;
  id:any;
  menus:any;

  constructor(private api:ApiService){}



  ngOnInit(): void {

    this.load();

  }

  load(){
    this.menudata = new FormGroup({
      // id: new FormControl(0),
      menutext:new FormControl("",Validators.compose([Validators.required])),
      showundermenu:new FormControl("",Validators.compose([Validators.required])),
      formtoopen:new FormControl("",Validators.compose([Validators.required])),
      havesubmenus:new FormControl("",Validators.compose([Validators.required])),
      sequenceno:new FormControl("",Validators.compose([Validators.required])),
      icon:new FormControl("",Validators.compose([Validators.required]))
    })

    this.api.get("menus").subscribe((result: any) => {
      this.menus = result;
      console.log(result);

    })

  }



  save(data: any) {
    console.log(data);
    if (this.id == null) {
      this.api.post("menus",data).subscribe((result: any) => {
        alert("Menus Details Added.")
         this.load();
      })
    }
    else {
      if (confirm("Are You Sure To Update Information")) {
        this.api.put("menus/" + this.id, data).subscribe((result: any) => {
          this.load();
        })
      }
    }
  }

  edit(id: number) {
    this.id = id;

    this.api.get("menus/" + id).subscribe((result: any) => {
      this.menudata.patchValue({
        id: result.id,
        menuid: result.menuid,
        menutext: result.menutext,
        showundermenu: result.showundermenu,
        formtoopen: result.formtoopen,
        havesubmenus: result.submenus,
        sequenceno: result.sequenceno,
        icon: result.icon
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
        this.api.delete("Menus/" + id).subscribe((result: any) => {
          this.api.showMessage({title:"Success", type:"success", message:this.api.delete_success_msg});
          this.load();
        })
      }
    })

  }


}
