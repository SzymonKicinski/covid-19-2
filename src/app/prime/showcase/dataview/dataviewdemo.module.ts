import { CodeHighlighterModule } from './../../components/codehighlighter/codehighlighter';
import { ButtonModule } from './../../components/button/button';
import { TabViewModule } from './../../components/tabview/tabview';
import { DialogModule } from './../../components/dialog/dialog';
import { PanelModule } from './../../components/panel/panel';
import { DataViewModule } from './../../components/dataview/dataview';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataViewDemo} from './dataviewdemo';
import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
import { InputTextModule } from '../../components/inputtext/inputtext';
import { DropdownModule } from './../../components/dropdown/dropdown';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DataViewDemoRoutingModule,
        DataViewModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        ButtonModule,
        CodeHighlighterModule
    ],
    declarations: [
        DataViewDemo
    ]
})
export class DataViewDemoModule {}
