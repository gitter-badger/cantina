import {Component} from 'angular2/core';

import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'cantina',
  templateUrl: '../../templates/main.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/login', name: 'Login', component: LoginComponent}
])
export class CantinaMain {

}
