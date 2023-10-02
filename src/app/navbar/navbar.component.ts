import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AplyforloanComponent } from '../aplyforloan/aplyforloan.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  longText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, molestias amet necessitatibus quas quis, quibusdam sit maxime cum rerum soluta saepe totam eos odit voluptates nulla ex deleniti atque natus?`;

  constructor(public dialog: MatDialog) {}

  openApplyForLone(): void {
     this.dialog.open(AplyforloanComponent);
  } 


  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  // Example method to change login status
  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
}
