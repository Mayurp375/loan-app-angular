import { Component } from '@angular/core';

@Component({
  selector: 'app-aplyforloan',
  templateUrl: './aplyforloan.component.html',
  styleUrls: ['./aplyforloan.component.css']
})
export class AplyforloanComponent {
  showLogin: boolean = false;
  showRegister: boolean = false;

  toggleLogin() {
    this.showLogin = !this.showLogin;
    this.showRegister = false;
  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
    this.showLogin = false;
  }
}
