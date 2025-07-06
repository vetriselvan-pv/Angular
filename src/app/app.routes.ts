import { Routes } from '@angular/router';
import { Login } from './page/login/login';
import { AngularApi } from './page/angular-api/angular-api';
import { Header } from './page/header/header';
import { About } from './page/attribute/attribute';
import { RxjsOperator } from './page/rxjs-operator/rxjs-operator';
import { PipeDecoratorExample } from './page/pipe-decorator-example/pipe-decorator-example';

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
    },
    {
        path : 'about',
        component : About
    } ,
    {
        path : 'rxjsOperator',
        component : RxjsOperator
    },
    {
        path : 'pipe-decorator',
        component : PipeDecoratorExample
    },
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    }
];
