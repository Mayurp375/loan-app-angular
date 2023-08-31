import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  addEmployee(data: any) {
    return this.http.post('http://localhost:8080/v1/send-otp', data);
  }

  // verifyOtp(data:any){
  //   return this.http.post('http://localhost:8080/v1/validate-otp',data)
  // }
  validateOtp(data: any): Observable<any> {
    console.log(data);
    
    return this.http.post('http://localhost:8080/v1/validate-otp', data);
  }
}