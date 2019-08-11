import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionalsPage } from './devotionals.page';

describe('DevotionalsPage', () => {
  let component: DevotionalsPage;
  let fixture: ComponentFixture<DevotionalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevotionalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevotionalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
