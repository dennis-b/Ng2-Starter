import { Component, View, NgFor } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/core/facade/async';
import { Inject } from 'angular2/angular2';
import template from './HomeComponent.html';

@Component({selector: 'home'})
@View({
    template: template,
    directives: [NgFor]
})
export class HomeComponent {

    constructor() {
        this.title = 'home';


        //ObservableWrapper.subscribe(dataService.getCustomers(), res => {
        //    this.customers = this.filteredCustomers = res.json();
        //});
        //
        //this.sorter = new Sorter();
    }
}

