import { Component, View, CORE_DIRECTIVES,FORM_DIRECTIVES,ViewEncapsulation ,NgStyle} from 'angular2/angular2';
import {RouteParams} from 'angular2/router'
import template from './UserComponent.html';


@Component({selector: 'user'})
@View({
    template: template,
    directives: [CORE_DIRECTIVES, NgStyle, FORM_DIRECTIVES],
    encapsulation: ViewEncapsulation.None
})
export class UserComponent {
    constructor(routeParams:RouteParams) {
        this.routeParams = routeParams;
        let users = JSON.parse(sessionStorage.getItem("users"));
        console.log(users);
        console.log(this.routeParams.get('id'));

    }

    onUserSelect(user) {
        this.router.parent.navigate(['/Home', {id: user.id}]);
    }
}

