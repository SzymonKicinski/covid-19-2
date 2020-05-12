import { CarService } from './../service/carservice';
import { Car } from './../domain/car';
import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: './datatablepaginatordemo.html',
})
export class DataTablePaginatorDemo implements OnInit {

    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
    }
}