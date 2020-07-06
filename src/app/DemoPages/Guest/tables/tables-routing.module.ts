import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesComponent} from "./tables.component";
import {FormTablesComponent} from "./formTables.component";

const routes: Routes = [
  {
    path: ':id',
    component: FormTablesComponent,
    data: {
      title: 'Tables'
    },
  },
  {
    path: 'details/:id',
    component: TablesComponent,
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
