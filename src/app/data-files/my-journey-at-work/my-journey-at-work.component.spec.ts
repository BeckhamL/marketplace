/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyJourneyAtWorkComponent } from './my-journey-at-work.component';

describe('MyJourneyAtWorkComponent', () => {
  let component: MyJourneyAtWorkComponent;
  let fixture: ComponentFixture<MyJourneyAtWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJourneyAtWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJourneyAtWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
