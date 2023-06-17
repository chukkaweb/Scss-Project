import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;
  let form:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsComponent ],
      imports:[SharedModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    form = component.customerForm;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate the form when submitted with empty fields', () => {
    component.onSubmit();
    expect(form.valid).toBeFalsy();
  });

  it('should validate the form when all required fields are filled', () => {
    expect(form.valid).toBeFalsy();
    form.controls['customerName'].setValue('ganesh');
    form.controls['customerAadhar'].setValue('123456789012');
    form.controls['address'].setValue('123 Main Street');
    form.controls['phoneNumber'].setValue('1234567890');
    form.controls['customerMail'].setValue('test@example.com');
    form.controls['state'].setValue('California');
    expect(form.valid).toBeTruthy();
  });

  
  it('should invalidate the form when phoneNumber field contains non-numeric characters', () => {
    expect(form.valid).toBeFalsy();
    form.controls['phoneNumber'].setValue('1234567890abc');
    expect(form.valid).toBeFalsy();
  });

  it('should invalidate the form when customerMail field is not a valid email', () => {
    form.controls['customerMail'].setValue('test');
    expect(form.valid).toBeFalsy();
  });


});



