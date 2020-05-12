import { Component } from '@angular/core';
import { SelectItem } from 'app/prime/components/common/selectitem';
import { SelectItemGroup } from 'app/prime/components/common/selectitemgroup';


interface City {
    name: string,
    code: string
}

@Component({
    templateUrl: './dropdowndemo.html',
})
// tslint:disable-next-line:component-class-suffix
export class DropdownDemo {

    cities: City[];

    selectedCity: City;

    cars: SelectItem[];

    selectedCar1: string;

    selectedCar2 = 'BMW';

    selectedCar3: string;

    groupedCars: SelectItemGroup[];

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.groupedCars = [
            {
                label: 'Germany', value: 'germany.png',
                items: [
                    { label: 'Audi', value: 'Audi' },
                    { label: 'BMW', value: 'BMW' },
                    { label: 'Mercedes', value: 'Mercedes' },
                    { label: 'Murcia', value: 'Murcia' }
                ]
            },
            {
                label: 'USA', value: 'usa.png',
                items: [
                    { label: 'Cadillac', value: 'Cadillac' },
                    { label: 'Ford', value: 'Ford' },
                    { label: 'GMC', value: 'GMC' }
                ]
            },
            {
                label: 'Japan', value: 'japan.png',
                items: [
                    { label: 'Honda', value: 'Honda' },
                    { label: 'Mazda', value: 'Mazda' },
                    { label: 'Toyota', value: 'Toyota' }
                ]
            }
        ];
    }
}
