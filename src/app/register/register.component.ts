import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder, private userService: UserService,private dialogRef:MatDialogRef<RegisterComponent>,@Inject(MAT_DIALOG_DATA) public data: any
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
 
 

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.addEmployee(this.userForm.value).subscribe(
        () => {
          // Successful registration
          const otpNumber = prompt('Please enter the OTP sent to your email:');
          console.log(otpNumber);
  
          if (otpNumber && otpNumber.trim() !== '') {         
            const formDataWithOtp = { ...this.userForm.value, otpNumber };         
  
            this.userService.validateOtp(formDataWithOtp).subscribe({
              next:(val:any)=>{

                
              },
              error:(err:any)=>{
                
                alert('Emlopyee added succesfully');
                this.dialogRef.close(true);
              }
            });         
          } 
        },
        error => {
          console.error("Error during registration:", error);
          alert('Registration failed. Please try again.');
        }
      );
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
}
