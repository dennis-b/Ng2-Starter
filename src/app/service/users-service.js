import {HTTP_PROVIDERS,Http} from 'angular2/http';
import {Injectable} from 'angular2/core'
import {Inject} from 'angular2/angular2'


@Injectable()
export class UsersService {
    constructor(http:Http) {
        this.http = http;
    }

    getUsers() {
        return this.http.get('/angular2Test/src/data/users.json').map(res => res.json());
    }
}