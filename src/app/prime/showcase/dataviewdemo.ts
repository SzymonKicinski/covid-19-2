import { SelectItem } from './../components/common/selectitem';
import { CarService } from './service/carservice';
import { Car } from './domain/car';
import {Component, OnInit} from '@angular/core';


@Component({
    templateUrl: './dataview/dataviewdemo.html',
    styles: [`
        .ui-button {
            margin-top: 3em;
        }

        .filter-container {
            text-align: center;
        }

        @media (max-width: 40em) {
            .car-details, .search-icon {
                text-align: center;
                margin-top: 0;
            }

            .filter-container {
                text-align: left;
            }
        }
    `]
})
export class DataViewDemo implements OnInit {

    cars: Car[];

    selectedCar: Car;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.cars = cars);

        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
    }

    selectCar(event: Event, car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {
        this.selectedCar = null;
    }
}
