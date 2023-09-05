import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplyforloanComponent } from './aplyforloan.component';

describe('AplyforloanComponent', () => {
  let component: AplyforloanComponent;
  let fixture: ComponentFixture<AplyforloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplyforloanComponent]
    });
    fixture = TestBed.createComponent(AplyforloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
