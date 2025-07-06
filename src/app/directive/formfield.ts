import { Directive, HostBinding, inject, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName]',
})
export class Formfield implements OnInit {
  private _control: NgControl = inject(NgControl);

  constructor() {}

  ngOnInit(): void {}

  @HostBinding('class.invalid')
  get invalid() {
    return this._control.touched && this._control.invalid;
  }

  @HostBinding('class.pending')
  get pending() {
    return this._control.pending;
  }

  @HostBinding('style.color')
  get validColor() {
    return this._control.touched && this._control.valid ? 'green' : 'inherit';
  }

  @HostBinding('id')
  @Input()
  formControlName: string = '';
}
