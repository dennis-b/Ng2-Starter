import { Component, View, CORE_DIRECTIVES,FORM_DIRECTIVES,ViewEncapsulation ,NgStyle} from 'angular2/angular2';
import {Router} from 'angular2/router'
import template from './UsersComponent.html';
import {UsersService} from '../../service/users-service';
import {NgGrid, NgGridItem} from '../../grid/NgGrid';
import {Injectable} from 'angular2/angular2'


@Component({selector: 'users', providers: [UsersService]})
@View({
    template: template,
    directives: [CORE_DIRECTIVES, NgStyle, NgGrid, NgGridItem, FORM_DIRECTIVES],
    encapsulation: ViewEncapsulation.None
})
export class UsersComponent {
    constructor(usersService:UsersService, router:Router) {
        this.router = router;
        this.usersService = usersService;
        this.getUsers();
        this.gridConfig = {
            'margins': [5],
            'draggable': true,
            'resizeable': true,
            'max_cols': 6,
            'max_rows': 0,
            'min_cols': 1,
            'min_rows': 1,
            'col_width': 250,
            'row_height': 250,
            'cascade': 'up',
            'min_width': 100,
            'min_height': 100,
            'fix_to_grid': false,
            'auto_style': true,
            'auto_resize': true
        };
    }

    getUsers() {
        this.usersService.getUsers()
            .subscribe(
                data => this.onGetUsersSuccesses(data),
                err => console.error('There was an error: ' + err),
            () => console.log('users loaded')
        );
    }

    onGetUsersSuccesses(data) {
        sessionStorage.setItem("users", JSON.stringify(data));
        this.users = data
    }

    onUserSelect(user) {
        this.router.parent.navigate(['/User', {id: user.id}]);
    }
}

