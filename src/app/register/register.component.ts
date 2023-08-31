import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      name: '',
      email: '',
      mobilNumber: '',
      city: '',
      state: '',
      dataOfBirth: '',
      password: '',
      otpNumber:''
    })
  }

  // userForm = new FormGroup({
  // name: new FormControl('', Validators.required),
  // email: new FormControl('', [Validators.required, Validators.email]),
  // mobilNumber: new FormControl('', Validators.required),
  // city: new FormControl(''),
  // state: new FormControl(''),
  // dataOfBirth: new FormControl('',[Validators.required,]),
  // password: new FormControl('', Validators.required),
  // confirmPassword: new FormControl('', Validators.required)
  // });





  ngOnInit(): void {
    this.userForm.patchValue(this.data);
   }
 
  // onSubmit() {
  
   
  //   if (this.userForm.valid) {
  //     console.log(this.userForm);
  //     this.userService.addEmployee(this.userForm.value).subscribe({
  
  //       next: (val: any) => {
  //         console.log(this.userForm.value);
  //         alert('Emlopyee added succesfully');
  //         // this.dialogRef.close(true);
  //       },
  //       error: (err: any) => {
  //         console.error(err);
  //       }
  //     })
  //   }
  // }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addEmployee(this.userForm.value).subscribe(() => {
        const otpNumber = prompt('Please enter the OTP sent to your email:');
        console.log(otpNumber);
        // Check if OTP is provided
        if (otpNumber && otpNumber.trim() !== '') {
     
          
          const formDataWithOtp = { ...this.userForm.value,otpNumber};
          
          this.userService.validateOtp(formDataWithOtp).subscribe(response => {
            if (response.ok) {
              console.log(response.ok);
              
              alert('Registration successful!');
            } else {
              alert('Invalid OTP. Please try again.');
            }
            
          });
          
        } else {
          alert('OTP is required for verification.');
        }
      });
    } else {
      alert('Please fill in all the required fields.');
    }
  } 
}
