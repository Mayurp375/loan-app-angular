import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AplyforloanComponent } from '../aplyforloan/aplyforloan.component';

@Component({
  selector: 'app-types-of-loan',
  templateUrl: './types-of-loan.component.html',
  styleUrls: ['./types-of-loan.component.css']
})
export class TypesOfLoanComponent {
  panelOpenState = false;

  @ViewChild('loanInfoDialog')
  loanInfoDialog!: TemplateRef<any>;
  selectedLoan: any;
  static passwordMatcher: any;

  constructor(public dialog: MatDialog) {}

  openInfoDialog(loan: any) {
    this.selectedLoan = loan;
    this.dialog.open(this.loanInfoDialog, {
      width: '300px',
    });
  }

  openApplyForLone(): void {
    this.dialog.open(AplyforloanComponent);
 }
 
  loans: any[] = [
    {
      id: 1,
      name: 'Home Loan',
      image: 'img',
      description: 'A loan for buying or renovating a house.',
      amount: 500000,
    },
    {
      id: 2,
      name: 'Car Loan',
      image: 'path_to_car_loan_image.jpg',
      description: 'A loan for purchasing a car.',
      amount: 200000,
    },
    
  ];
}
