/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OverviewCardLargeComponent } from './overview-card-large.component';

describe('OverviewCardLargeComponent', () => {
  let component: OverviewCardLargeComponent;
  let fixture: ComponentFixture<OverviewCardLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCardLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
