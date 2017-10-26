import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourListingsComponent } from './your-listings.component';

describe('YourListingsComponent', () => {
  let component: YourListingsComponent;
  let fixture: ComponentFixture<YourListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
