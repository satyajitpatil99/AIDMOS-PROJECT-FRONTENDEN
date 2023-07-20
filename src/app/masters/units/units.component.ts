import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  units:any;
  unitdata:any;
  id:any;

  constructor(private api:ApiService){}
  ngOnInit(): void {

    this.load();



  }

  load(){

    this.unitdata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("")

    })





    this.api.get("Units").subscribe((result:any)=>{
      this.units = result;
      console.log(result);

    })

  }

  savedata(data:any){
    this.api.post("Units",data).subscribe((result:any)=>{
      console.log(result);
      this.load();

    })


  }
  deletedata(id:number){
    this.api.delete("Units/"+id).subscribe((result:any)=>{
      console.log(result);
      this.load();


    })

  }

  edit(id:number){
    if(id != null){
    this.api.get("Units/"+id).subscribe((result:any)=>{
      
    })
    }
  }







}
