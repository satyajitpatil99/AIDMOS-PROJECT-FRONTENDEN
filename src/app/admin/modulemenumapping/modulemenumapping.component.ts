import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modulemenumapping',
  templateUrl: './modulemenumapping.component.html',
  styleUrls: ['./modulemenumapping.component.css']
})
export class ModulemenumappingComponent  implements OnInit{

  moduledata:any;

  ngOnInit(): void {
    this.moduledata= new FormGroup({
      selectoptions: new FormControl(),

    })
  }

  save(data:any){

  }




}
