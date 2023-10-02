import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  applicants: any[] = [];

  constructor(private getApplication: UserService) { }
  ngOnInit(): void {
    this.getAllApp();
  }

  getAllApp() {
    this.getApplication.getAllDataOfAplication().subscribe({
      next: (val) => {
        console.log(val)
        this.applicants = val;
      }, error: (err) => {
        console.log(err)
      }
    })
  }

  approve() {
    // Handle the approve logic here
  }



  reject(applicant: any): void {
    if (confirm('Are you sure you want to reject this application?')) {
      this.getApplication.deleteApplication(applicant.id).subscribe({
        next: (reject) => {
          console.log("from admin",reject);
          // const index = this.applicants.indexOf(applicant)
          // if (index > -1) {
          //   this.applicants.splice(index, 1);
          // }
        }, error: (err) => console.error("Next from admin",err)
      }
      );
    }
  }
}

