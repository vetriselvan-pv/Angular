import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { AngularApi } from './page/angular-api/angular-api';
import { Header } from './page/header/header';

export const routes: Routes = [
    {
        path : 'login',
        component : Login
    },
    {
        path : 'angularApi',
        component : AngularApi
    },
    {
        path : 'header',
        component : Header
    }
];
