/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RethinkingMainComponent } from './rethinking-main.component';

describe('RethinkingMainComponent', () => {
  let component: RethinkingMainComponent;
  let fixture: ComponentFixture<RethinkingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RethinkingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RethinkingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
