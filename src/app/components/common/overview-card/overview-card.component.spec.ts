/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OverviewCardComponent } from './overview-card.component';

describe('OverviewCardComponent', () => {
  let component: OverviewCardComponent;
  let fixture: ComponentFixture<OverviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
