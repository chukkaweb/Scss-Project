import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssComponent } from './scss.component';
import { HeaderComponent } from 'src/app/core/header/header.component';

describe('ScssComponent', () => {
  let component: ScssComponent;
  let fixture: ComponentFixture<ScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssComponent,
      HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
