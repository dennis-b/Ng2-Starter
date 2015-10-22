import {Component, View, bootstrap} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Location,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Route, AsyncRoute, Router} from 'angular2/router';

import { HomeComponent } from './components/home/HomeComponent';
import { UsersComponent } from './components/users/UsersComponent';
import { UserComponent } from './components/user/UserComponent';
import template from './app.html';

@Component({
    selector: 'app'
})
@View({
    directives: [ROUTER_DIRECTIVES, HomeComponent, UsersComponent],
    template: template
})
@RouteConfig([
    new Route({path: '/', component: HomeComponent, as: 'Home'}),
    new Route({path: '/users', component: UsersComponent, as: 'Users'}),
    new Route({path: '/users/:id', component: UserComponent, as: 'User'})
])
export class AppComponent {
    constructor() {
        this.title = 'Angular 2';
    }
}