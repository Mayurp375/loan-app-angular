import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  responseMessage!: string;

  constructor(private fb: FormBuilder, private authService: UserService,private router: Router,private dialogRef : MatDialogRef<LoginComponent>
    ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    console.log(this.loginForm)
    this.authService.login(email, password).subscribe(
      {
        next:()=>{
          this.router.navigate(['/dashboard']);
          this.dialogRef.close(true);
        },
        error:(err:any)=>{
          alert('Login failed! ' + err);
        }
      }
    //   response => {
    //   this.responseMessage = response;
    //   if (response.success) {  
    //     alert('Login failed!');
    //   } else {
    //     this.router.navigate(['/dashboard']);
    //   }
    // }
    );
  }
}