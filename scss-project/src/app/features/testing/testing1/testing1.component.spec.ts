import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing1Component } from './testing1.component';

// describe - define test suite, Create a group of specs (often called a suite)
describe('Testing1Component', () => {
  let component: Testing1Component;
  let fixture: ComponentFixture<Testing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testing1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it - define an individual unit test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be text in string', () => {
    expect(component.text).toContain('Testing working');
  });

  // Disable tests / Ignore test insert x before it() // The developer can easily disable test suit or tests without commenting them out but by just pre-pending x to the describe or it functions:
  xit('test disable', () => {
    expect(component).toBeTruthy();
  });

});
