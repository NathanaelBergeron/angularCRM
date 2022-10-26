import { HelpComponent } from './../component/help/help.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './../app-material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoginComponent,
        HelpComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the button on creation', ()=>{
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('button')?.disabled).toBeTrue();
  })

  it('should activate login button when form is valid', () => {
    // getting the elements
    const buttonElement = fixture.nativeElement.querySelector('button');
    const loginElement = fixture.nativeElement.querySelector('input#login');
    const passwordElement = fixture.nativeElement.querySelector('input#password');
    // setting a value
    loginElement.value = 'myLogin';
    passwordElement.value = 'password';
    // trigger an event
    loginElement.dispatchEvent(new Event('input'));
    passwordElement.dispatchEvent(new Event('input'));
    // Ask Angular to detect changes
    fixture.detectChanges();
    expect(buttonElement.disabled).toBeFalse();
   });
});
