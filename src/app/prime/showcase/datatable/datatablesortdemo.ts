import { CarService } from './../service/carservice';
import { Car } from './../domain/car';
import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: './datatablesortdemo.html'
})
export class DataTableSortDemo implements OnInit {

    cars1: Car[];

    cars2: Car[];

    sortO = 1;

    sortF: string;

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars1 = cars);
        this.carService.getCarsSmall().then(cars => this.cars2 = cars);
    }

    changeSort(event) {
        if (!event.order) {
            this.sortF = 'year';
        } else {
            this.sortF = event.field;
        }
    }
}
