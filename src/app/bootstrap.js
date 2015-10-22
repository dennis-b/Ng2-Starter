import 'babel/polyfill';
import 'reflect-metadata';
import 'zone.js';

import '../assets/style/main.css';
import '../assets/style/NgGrid.css';

import { bootstrap, bind,provide, FORM_PROVIDERS,ELEMENT_PROBE_PROVIDERS } from 'angular2/angular2';
import { ROUTER_BINDINGS, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS ,HTTP_PROVIDERS} from 'angular2/http';
import { UserService } from './service/users-service';
import { AppComponent } from './app';


bootstrap(AppComponent,
    [
        FORM_PROVIDERS,
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        ELEMENT_PROBE_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
).then(success => console.log('AppComponent bootstrapped!'), error => console.log(error));