import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfLoanComponent } from './types-of-loan.component';

describe('TypesOfLoanComponent', () => {
  let component: TypesOfLoanComponent;
  let fixture: ComponentFixture<TypesOfLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesOfLoanComponent]
    });
    fixture = TestBed.createComponent(TypesOfLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
