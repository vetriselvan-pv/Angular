import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Formfield } from '../../directive/formfield';
import { delay, map, of, timer } from 'rxjs';
import { Logger, LoggerToken } from '../../token/custom-injection-token';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, Formfield],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers : [
  ]
})
export class Login implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);

  result: string = 'start';

  constructor(@Inject(LoggerToken) private logger: Logger) {
    this.logger.log('Login component initialized');
  }

  formGroup: FormGroup = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required],[this.userExistsValidator()]],
    password: ['', [Validators.required]],
  });


  userExistsValidator():AsyncValidatorFn  {
    return (control: AbstractControl) => {
        return  of(null).pipe(delay(2000))
    }
}
 

  async someMethod() {
    this.result = 'Loading';
    console.time(this.result);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        this.result = 'Done';
        resolve('dddd');
      }, 5000);
    });
    console.timeLog(this.result, this.result);
  }

  ngOnInit() {
    this.formGroup.events.subscribe({
      next: (e) => {
        console.log(e);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
    console.log(
      'fomrGroup touched : ',
      this.formGroup.touched,
      'formGroup pristine : ',
      this.formGroup.pristine
    );

    /**
     * Events for the username field got subscribed
     */
    this.formGroup.get('username')?.events.subscribe({
      next: (e) => {
        console.log('password control', e);
        this.logger.log(e.source.value as string)
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('completed');
      },
    });

    /**
   * Events for the password field got subscribed
   * 
   *  this.formGroup.get('password')?.events.subscribe({
      next : (e) => {
        console.log('password control', e)
      },
      error : (err) => {
        console.error(err)
      },
      complete : () => {
        console.log('completed')
      }
    })  
   */
  }

  onClick() {
    this.formGroup.patchValue({ password: 123444 });
    console.log(this.formGroup.get('password')?.pristine);
    console.log(this.formGroup.pristine);
  }

  parentEventBubbling(e: MouseEvent) {
    console.log('parent : ', e);
  }

  cursorDown(e: MouseEvent): boolean {
    console.log('Button : ', e);
    return false;
  }

   submit() {
    const payload = {
      password : this.formGroup.get('password')?.value,
      username : this.formGroup.get('username')?.value
    }

    console.log(payload);
   }
}
