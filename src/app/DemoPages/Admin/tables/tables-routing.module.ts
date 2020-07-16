import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesComponent} from "./tables.component";
import {TableDesignerComponent} from "./table-designer/table-designer.component";
import {TableDetailsComponent} from "./table-details/table-details.component";
import {TableDataEntryComponent} from "./table-data-entry/table-data-entry.component";
import {TableIndicatorsComponent} from "./table-indicators/table-indicators.component";
import {TableChartsComponent} from "./table-charts/table-charts.component";
import {FormTablesComponent} from "./table-forms/formTables.component";

const routes: Routes = [
  {
    path: ':id',
    component: FormTablesComponent,
    data: {
      title: 'Tables'
    },
  },
  {
    path: 'design/:id',
    component: TableDesignerComponent,
    data: {
      title: 'Tables'
    },
  },
  {
    path: 'charts/:id',
    component: TableChartsComponent,
    data: {
      title: 'Tables'
    },
  },
  {
    path: 'details/:id',
    component: TableDetailsComponent,
    data: {
      title: 'Tables'
    },
  },
  {
    path: 'data/:id',
    component: TableDataEntryComponent,
    data: {
      title: 'Tables'
    },
  },
  {
    path: 'indicators/:id',
    component: TableIndicatorsComponent,
    data: {
      title: 'Indicators'
    },
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
