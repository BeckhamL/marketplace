/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutlineMainComponent } from './outline-main.component';

describe('OutlineMainComponent', () => {
  let component: OutlineMainComponent;
  let fixture: ComponentFixture<OutlineMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlineMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
