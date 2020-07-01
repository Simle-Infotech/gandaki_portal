import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubFormsComponent} from "./subForms.component";

const routes: Routes = [
  {
    path: '',
    component: SubFormsComponent,
    data: {
      title: 'Sub Forms'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubFormsRoutingModule { }
