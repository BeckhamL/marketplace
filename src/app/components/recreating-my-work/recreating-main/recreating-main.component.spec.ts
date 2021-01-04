/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecreatingMainComponent } from './recreating-main.component';

describe('RecreatingMainComponent', () => {
  let component: RecreatingMainComponent;
  let fixture: ComponentFixture<RecreatingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecreatingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecreatingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
