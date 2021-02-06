/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrayOverResumeComponent } from './pray-over-resume.component';

describe('PrayOverResumeComponent', () => {
  let component: PrayOverResumeComponent;
  let fixture: ComponentFixture<PrayOverResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayOverResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayOverResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
