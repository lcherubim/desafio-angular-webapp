import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyListPageComponent } from './agency-list-page.component';

describe('AgencyListPageComponent', () => {
  let component: AgencyListPageComponent;
  let fixture: ComponentFixture<AgencyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
