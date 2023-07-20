import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './Message';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  insert_success_msg = "Data Inserted Successfully.";
  delete_success_msg = "Data Deleted Successfully.";
  update_success_msg = "Data Updated Successfully.";

  getHeader() {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': 'Bearer ' + localStorage.getItem("token")
    });
    return reqHeader;
  }

  baseurl="https://localhost:7042/api/";
  constructor(private http:HttpClient) {}

  get(api: string) {
    //console.log(this.baseurl + api);    
    return this.http.get(this.baseurl + api, { headers: this.getHeader() })
  };

  post(api: string, data: any) {
    console.log(this.baseurl + api);
    console.log(data);
    return this.http.post(this.baseurl + api, data, { headers: this.getHeader() })
  };

  put(api: string, data: any) {
    return this.http.put(this.baseurl + api, data, { headers: this.getHeader() })
  };

  delete(api: string) {
    return this.http.delete(this.baseurl + api)
  };
    public loadJsFile(url: string) {
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(node);
    }

    public showMessage(message:Message){
      if(message.type == "success"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: message.message,
          showConfirmButton: false,
          timer: 1000
        })
      }
      else{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: message.message,
          showConfirmButton: false,
          timer: 5000
        })
      }
    }

}



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
