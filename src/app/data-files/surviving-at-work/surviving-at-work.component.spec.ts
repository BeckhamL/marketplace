/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SurvivingAtWorkComponent } from './surviving-at-work.component';

describe('SurvivingAtWorkComponent', () => {
  let component: SurvivingAtWorkComponent;
  let fixture: ComponentFixture<SurvivingAtWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivingAtWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivingAtWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
