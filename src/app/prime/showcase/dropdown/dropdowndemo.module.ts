import { CodeHighlighterModule } from './../../components/codehighlighter/codehighlighter';
import { TabViewModule } from './../../components/tabview/tabview';
import { DropdownModule } from './../../components/dropdown/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownDemo } from './dropdowndemo';
import { DropdownDemoRoutingModule } from './dropdowndemo-routing.module';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DropdownDemoRoutingModule,
		DropdownModule,
		TabViewModule,
		CodeHighlighterModule
	],
	declarations: [
		DropdownDemo
	]
})
export class DropdownDemoModule { }
