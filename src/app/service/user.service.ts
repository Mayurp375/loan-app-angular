import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  validateOtp(data: any): Observable<any> {
    console.log(data);

    return this.http.post('http://localhost:8080/v1/validate-otp', data);
  }

  login( email:string, password:string): Observable<any> {
    console.log(email," ",password);
     return this.http.post<string>('http://localhost:8080/v1/login', { email, password}, { responseType: 'text' as 'json' });
  }

  
  checkCibil(data: any): Observable<Object> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // return this.http.post("http://localhost:8080/pan-card/validate-pan", data, {
    //   responseType: 'text' as 'json',
    //   headers: headers
    // });
    console.log(data);
    return this.http.post('http://localhost:8080/pan-card/validate-pan', data, {
      responseType: 'text' as 'json', 
    })
  }
  generateOtp(email: string): Observable<string> {
    return this.http.post<string>('http://localhost:8080/v1/reset/generate-otp', { email });
  }
  
  updatePassword(email: string, otp: string, newPassword: string): Observable<string> {
    return this.http.patch<string>('// http://localhost:8080/v1/reset/update-password', { email, otp, newPassword });
  }
  

}