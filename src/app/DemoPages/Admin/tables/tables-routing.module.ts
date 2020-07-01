import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesComponent} from "./tables.component";
import {TableDesignerComponent} from "./table-designer/table-designer.component";
import {TableDetailsComponent} from "./table-details/table-details.component";
import {TableDataEntryComponent} from "./table-data-entry/table-data-entry.component";

const routes: Routes = [
  {
    path: ':id',
    component: TablesComponent,
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
