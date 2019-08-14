import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroPage } from './erro.page';

describe('ErroPage', () => {
  let component: ErroPage;
  let fixture: ComponentFixture<ErroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
