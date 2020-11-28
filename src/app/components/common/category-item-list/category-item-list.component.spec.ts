/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CategoryItemListComponent } from './category-item-list.component';

describe('CategoryItemListComponent', () => {
  let component: CategoryItemListComponent;
  let fixture: ComponentFixture<CategoryItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
