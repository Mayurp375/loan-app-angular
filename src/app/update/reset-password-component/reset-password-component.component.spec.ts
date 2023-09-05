import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponentComponent } from './reset-password-component.component';

describe('ResetPasswordComponentComponent', () => {
  let component: ResetPasswordComponentComponent;
  let fixture: ComponentFixture<ResetPasswordComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordComponentComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
