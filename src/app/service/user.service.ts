import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string= 'http://localhost:8080/admin'

  deleteApplication(id: any) :Observable<any>{
     return this.http.delete(`${this.apiUrl}/delete?id=${id}`);
  }
  http: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  addEmployee(data: any) {
    console.log(data);
    return this.http.post('http://localhost:8080/v1/send-otp', data);
  }

  validateOtp(data: any): Observable<any> {
    console.log(data);

    return this.http.post('http://localhost:8080/v1/validate-otp', data);
  }

  login(email: string, password: string): Observable<any> {
    console.log(email, " ", password);
    return this.http.post<string>('http://localhost:8080/v1/login', { email, password }, { responseType: 'text' as 'json' });


    // var reqHeader = new HttpHeaders({ 
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('Authentication'))
    //  });
    // return this.http.post<string>('http://localhost:8080/v1/login',email, password , { headers: reqHeader });
  }

  getAuth(email: string, password: string) {
    let reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        });
   
    let headers = { headers: reqHeader }

    let payload = {
      "email":email,
      "password":password
    }

    return this.http.post("http://localhost:8080/v1/login",payload,headers)

  
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
    return this.http.patch<string>('http://localhost:8080/v1/reset/update-password', { email, otp, newPassword });
  }

  getAllDataOfAplication():Observable<any>{
    return this.http.get('http://localhost:8080/admin/applications')
  }

}