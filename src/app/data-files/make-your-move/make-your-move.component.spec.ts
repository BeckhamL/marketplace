/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakeYourMoveComponent } from './make-your-move.component';

describe('MakeYourMoveComponent', () => {
  let component: MakeYourMoveComponent;
  let fixture: ComponentFixture<MakeYourMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeYourMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeYourMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
