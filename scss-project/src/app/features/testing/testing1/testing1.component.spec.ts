import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing1Component } from './testing1.component';
//  test method into three sections: arrange, act and assert. It also makes the test more clean and readable.

// describe - define test suite, Create a group of specs (often called a suite)
describe('Testing1Component', () => { // 	describe() function block define a test suite (the group of related tests)
  let component: Testing1Component;
  let fixture: ComponentFixture<Testing1Component>; // The ComponentFixture properties and methods provide access to the component, its DOM representation, and aspects of its Angular environment.

  beforeEach(async () => {
    await TestBed.configureTestingModule({ // similar to the @ngModule The default testing module is configured with basic declaratives and some Angular service substitutes that every tester needs.
      declarations: [ Testing1Component ]
    })

    .compileComponents();
    fixture = TestBed.createComponent(Testing1Component); // Create an instance of a component of type T based on the current TestBed configuration. 
    component = fixture.componentInstance; // The instance of the component class created by TestBed.createComponent.
    fixture.detectChanges(); //  Angular can't see that you've changed personComponent.name and won't update the name binding until you call detectChanges.
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

   it('should check incremented value is greater than zero', () => {
 // Arrange - dependency injection
 let counterComponent: Testing1Component = new Testing1Component();
 // Act - call a method/function
 const curCounterValue = 1;
//  const curCounterValue = counterComponent.increaseCounter();
 // Assert - 3. expect - Create an expectation/assertion for a spec
 expect(curCounterValue).toBeGreaterThan(0);
 })
});
