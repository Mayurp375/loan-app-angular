import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  longText = `Financial uncertainty is hard on employees and causes even.`;

  toggle(){
    console.log("button clicke");
    
  }
}
