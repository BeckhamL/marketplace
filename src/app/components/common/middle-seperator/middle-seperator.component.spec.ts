/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiddleSeperatorComponent } from './middle-seperator.component';

describe('MiddleSeperatorComponent', () => {
  let component: MiddleSeperatorComponent;
  let fixture: ComponentFixture<MiddleSeperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleSeperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
