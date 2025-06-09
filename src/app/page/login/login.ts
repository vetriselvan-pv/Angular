 
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit{
  private formBuilder : FormBuilder = inject(FormBuilder);

  formGroup : FormGroup = this.formBuilder.nonNullable.group({
    username: ['' , [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(){
    
  }

  ngOnInit(){ 
    this.formGroup.events.subscribe({
      next : (e) => {
        console.log(e)
      },
      error : (err) => {
        console.error(err)
      },
      complete : () => {
        console.log('completed')
      }
    })  
  console.log( 'fomrGroup touched : ',this.formGroup.touched , 'formGroup pristine : ' ,this.formGroup.pristine)

  /**
   * Events for the username field got subscribed
   */
   this.formGroup.get('username')?.events.subscribe({
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

  onClick(){
    this.formGroup.patchValue({ 'password' : 123444});
    console.log(this.formGroup.get('password')?.pristine)
    console.log(this.formGroup.pristine)
  }
}


