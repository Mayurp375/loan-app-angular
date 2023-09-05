import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset-password-component',
  templateUrl: './reset-password-component.component.html',
  styleUrls: ['./reset-password-component.component.css']
})
export class ResetPasswordComponentComponent {
  otpForm: FormGroup;
  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: UserService) {
    this.otpForm = this.fb.group({
      email: ['']
    });

    this.resetForm = this.fb.group({
      email: [''],
      otp: [''],
      newPassword: ['']
    });
  }

  generateOtp() {
    const email = this.otpForm.value.email;
    this.registerService.generateOtp(email).subscribe(
      {
        next:(response)=>{
           alert(response)
      
        },
        error:(error)=>{
          alert('Failed to generate OTP.')
        }
      }
    );
  }

  updatePassword() {
    const values = this.resetForm.value;
    this.registerService.updatePassword(values.email, values.otp, values.newPassword).subscribe(

      {
        next:(response)=>{
           alert(response)
      
        },
        error:(error)=>{
          alert('Failed to update password.')
        }
      }
    );
  }
}
