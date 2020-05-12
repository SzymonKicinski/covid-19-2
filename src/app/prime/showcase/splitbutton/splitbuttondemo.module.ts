import { CodeHighlighterModule } from './../../components/codehighlighter/codehighlighter';
import { TabViewModule } from './../../components/tabview/tabview';
import { ToastModule } from './../../components/toast/toast';
import { SplitButtonModule } from './../../components/splitbutton/splitbutton';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonDemo } from './splitbuttondemo';
import { SplitButtonDemoRoutingModule } from './splitbuttondemo-routing.module';


@NgModule({
	imports: [
		CommonModule,
		SplitButtonDemoRoutingModule,
		SplitButtonModule,
		ToastModule,
		TabViewModule,
		CodeHighlighterModule
	],
	declarations: [
		SplitButtonDemo
	]
})
export class SplitButtonDemoModule { }
