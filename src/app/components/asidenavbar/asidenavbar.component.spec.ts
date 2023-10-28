import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidenavbarComponent } from './asidenavbar.component';

describe('AsidenavbarComponent', () => {
  let component: AsidenavbarComponent;
  let fixture: ComponentFixture<AsidenavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsidenavbarComponent]
    });
    fixture = TestBed.createComponent(AsidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
