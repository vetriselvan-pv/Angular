import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  loggedInRole  = signal<'ADMIN' | 'DEVELOPER' | 'None' >('None')

  userChange(role:'ADMIN' | 'DEVELOPER' | 'None'){
    this.loggedInRole.set(role)
  }
}

