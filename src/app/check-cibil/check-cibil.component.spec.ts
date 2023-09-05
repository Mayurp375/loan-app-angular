import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCibilComponent } from './check-cibil.component';

describe('CheckCibilComponent', () => {
  let component: CheckCibilComponent;
  let fixture: ComponentFixture<CheckCibilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckCibilComponent]
    });
    fixture = TestBed.createComponent(CheckCibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
