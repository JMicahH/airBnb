import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndRegComponent } from './login-and-reg.component';

describe('LoginAndRegComponent', () => {
  let component: LoginAndRegComponent;
  let fixture: ComponentFixture<LoginAndRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAndRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
