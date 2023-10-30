import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRegisterComponent } from './time-register.component';

describe('TimeRegisterComponent', () => {
  let component: TimeRegisterComponent;
  let fixture: ComponentFixture<TimeRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeRegisterComponent]
    });
    fixture = TestBed.createComponent(TimeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
