import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySearchPageComponent } from './agency-search-page.component';

describe('AgencySearchPageComponent', () => {
  let component: AgencySearchPageComponent;
  let fixture: ComponentFixture<AgencySearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencySearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
