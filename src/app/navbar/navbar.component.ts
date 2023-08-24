import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AplyforloanComponent } from '../aplyforloan/aplyforloan.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  longText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, molestias amet necessitatibus quas quis, quibusdam sit maxime cum rerum soluta saepe totam eos odit voluptates nulla ex deleniti atque natus?`;

  toggle(){
    console.log("button clicke");
    
  }

  

  animal: string | undefined;
  name: string | undefined;

  constructor(public dialog: MatDialog) {}

  openApplyForLone(): void {
    const dialogRef = this.dialog.open(AplyforloanComponent, {
     
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openAbout(){
    const dialogRef = this.dialog.open(AboutComponent, {
     
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
