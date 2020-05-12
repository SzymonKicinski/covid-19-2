import { CarService } from './../service/carservice';
import { Car } from './../domain/car';
import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: './datatableresponsivedemo.html',
})
export class DataTableResponsiveDemo implements OnInit {

    cars: Car[];

    stacked: boolean;

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);
    }

    toggle() {
        this.stacked = !this.stacked;
    }
}