import { SelectItem } from 'app/prime/components/common/selectitem';
import { FilterMetadata } from './../../components/common/filtermetadata';
import { LazyLoadEvent } from './../../components/common/lazyloadevent';
import { CarService } from './../service/carservice';
import { Car } from './../domain/car';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './datatableeditabledemo.html'
})
export class DataTableEditableDemo implements OnInit {

    cars: Car[];
    
    brands: SelectItem[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        
        this.brands = [
            {label: 'Choose', value: null},
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
    }
}