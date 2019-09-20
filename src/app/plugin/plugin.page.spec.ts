import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginPage } from './plugin.page';

describe('PluginPage', () => {
  let component: PluginPage;
  let fixture: ComponentFixture<PluginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
