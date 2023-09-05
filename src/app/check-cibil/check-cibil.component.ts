import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css']
})
export class CheckCibilComponent  {

  title :string= 'Cibil Score';

  cibilForm: FormGroup;
  responseMessage!: string;

  constructor(private fb: FormBuilder, private cibilService: UserService) {
    this.cibilForm = this.fb.group({
      panNumber: [''] 
    });
  }

  checkCibilScore() {
    // console.log("Sending payload:", this.cibilForm.value);
    this.cibilService.checkCibil(this.cibilForm.value).subscribe(response => {
      this.responseMessage = response as string;
    });
  }
}
