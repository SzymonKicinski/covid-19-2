import { CodeHighlighterModule } from './../../components/codehighlighter/codehighlighter';
import { TabViewModule } from './../../components/tabview/tabview';
import { GrowlModule } from './../../components/growl/growl';
import { SliderModule } from './../../components/slider/slider';
import { MultiSelectModule } from './../../components/multiselect/multiselect';
import { DialogModule } from './../../components/dialog/dialog';
import { DropdownModule } from './../../components/dropdown/dropdown';
import { ContextMenuModule } from './../../components/contextmenu/contextmenu';
import { InputTextModule } from './../../components/inputtext/inputtext';
import { CalendarModule } from './../../components/calendar/calendar';
import { ButtonModule } from './../../components/button/button';
import { DataTableModule } from './../../components/datatable/datatable';
import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {DataTableDemo} from './datatabledemo';
import {DataTableCMDemo} from './datatablecmdemo';
import {DataTableColReorderDemo} from './datatablecolreorderdemo';
import {DataTableColResizeDemo} from './datatablecolresizedemo';
import {DataTableColTogglerDemo} from './datatablecoltogglerdemo';
import {DataTableCrudDemo} from './datatablecruddemo';
import {DataTableEditableDemo} from './datatableeditabledemo';
import {DataTableExportDemo} from './datatableexportdemo';
import {DataTableFacetsDemo} from './datatablefacetsdemo';
import {DataTableFilterDemo} from './datatablefilterdemo';
import {DataTableColGroupDemo} from './datatablecolgroupdemo';
import {DataTableRowGroupDemo} from './datatablerowgroupdemo';
import {DataTableLazyDemo} from './datatablelazydemo';
import {DataTablePaginatorDemo} from './datatablepaginatordemo';
import {DataTableResponsiveDemo} from './datatableresponsivedemo';
import {DataTableRowExpansionDemo} from './datatablerowexpansiondemo';
import {DataTableScrollDemo} from './datatablescrolldemo';
import {DataTableSelectionDemo} from './datatableselectiondemo';
import {DataTableSortDemo} from './datatablesortdemo';
import {DataTableTemplatingDemo} from './datatabletemplatingdemo';
import {DataTableSubmenu} from './datatablesubmenu';
import {DatatableDemoRoutingModule} from './datatabledemo-routing.module';


@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		DatatableDemoRoutingModule,
        DataTableModule,
        CalendarModule,
        ButtonModule,
        InputTextModule,
        ContextMenuModule,
        DropdownModule,
        DialogModule,
        MultiSelectModule,
        SliderModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataTableDemo,
        DataTableCMDemo,
        DataTableColReorderDemo,
        DataTableColResizeDemo,
        DataTableColTogglerDemo,
        DataTableCrudDemo,
        DataTableEditableDemo,
        DataTableExportDemo,
        DataTableFacetsDemo,
        DataTableFilterDemo,
        DataTableColGroupDemo,
        DataTableRowGroupDemo,
        DataTableLazyDemo,
        DataTablePaginatorDemo,
        DataTableResponsiveDemo,
        DataTableRowExpansionDemo,
        DataTableScrollDemo,
        DataTableSelectionDemo,
        DataTableSortDemo,
        DataTableTemplatingDemo,
        DataTableSubmenu
	]
})
export class DataTableDemoModule {}
