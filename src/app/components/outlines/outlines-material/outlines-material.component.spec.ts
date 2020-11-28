/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutlinesMaterialComponent } from './outlines-material.component';

describe('OutlinesMaterialComponent', () => {
  let component: OutlinesMaterialComponent;
  let fixture: ComponentFixture<OutlinesMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlinesMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlinesMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
