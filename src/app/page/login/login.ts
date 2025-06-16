import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  private formBuilder: FormBuilder = inject(FormBuilder);

  result: string = 'start';

  formGroup: FormGroup = this.formBuilder.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor() {
    this.someMethod()
  }

  async someMethod(){
    this.result = 'Loading';
    console.time(this.result)
    await new Promise((resolve,reject) => {
       setTimeout(() => {
           this.result = 'Done';
          resolve('dddd') 
       }, 5000);
    });  
    console.timeLog(this.result,this.result)
 
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
}
