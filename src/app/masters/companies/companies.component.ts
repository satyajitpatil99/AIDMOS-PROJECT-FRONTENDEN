import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companydata:any;
  companies:any;
  id:any;

  constructor(private api:ApiService){}
  ngOnInit(): void {

    this.load();

  }
  load(){

    this.companydata = new FormGroup({
      id:new FormControl(0),
      name:new FormControl("")

    })

    this.api.get("Companies").subscribe((result:any)=>{
      this.companies = result;
      console.log(result);

    })

  }
  save(data:any){
    if(this.id == null){
    this.api.post("Companies",data).subscribe((result:any)=>{
      console.log(result);
      this.load();

    })
  }
  else{
    this.api.put("Companies/"+this.id,data).subscribe((result:any)=>{
      console.log(result);
      this.load();

    })
  }




  }

  info(id:number){
    this.api.delete("Companies/"+ id ).subscribe((result:any)=>{
      console.log(result);
      this.load();


    })

  }

   edit(id:number){
    if(id != null){
       this.api.get("Companies/"+id).subscribe((result:any)=>{
         console.log(result);
         this.load();
         this.companydata.patchValue({
         id:this.id,
          name:result.name

        })

         })
     }

   }





}
