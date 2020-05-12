import { CodeHighlighterModule } from './../../components/codehighlighter/codehighlighter';
import { TabViewModule } from './../../components/tabview/tabview';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonDemo } from './radiobuttondemo';
import { RadioButtonDemoRoutingModule } from './radiobuttondemo-routing.module';
import { RadioButtonModule } from '../../components/radiobutton/radiobutton';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RadioButtonDemoRoutingModule,
		RadioButtonModule,
		TabViewModule,
		CodeHighlighterModule
	],
	declarations: [
		RadioButtonDemo
	]
})
export class RadioButtonDemoModule { }
