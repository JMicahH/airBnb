import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedListingComponent } from './searched-listing.component';

describe('SearchedListingComponent', () => {
  let component: SearchedListingComponent;
  let fixture: ComponentFixture<SearchedListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
