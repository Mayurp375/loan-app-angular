import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm = new FormGroup({
   
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    otp: new FormControl('', Validators.required)
  });


  
  onSubmit() {
    console.log(this.userForm.value);
  }
}
