import { SelectItem } from 'app/prime/components/common/selectitem';
import { FilterMetadata } from './../../components/common/filtermetadata';
import { LazyLoadEvent } from './../../components/common/lazyloadevent';
import { CarService } from './../service/carservice';
import { Car } from './../domain/car';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './datatablefacetsdemo.html'
})
export class DataTableFacetsDemo implements OnInit {

    cars: Car[];

    constructor(private carService:CarService) {}

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
    }
}