/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RealityChallengeComponent } from './reality-challenge.component';

describe('RealityChallengeComponent', () => {
  let component: RealityChallengeComponent;
  let fixture: ComponentFixture<RealityChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealityChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealityChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
