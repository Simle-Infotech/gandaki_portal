import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboards',
      status: false
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'sub_forms/:id',
        loadChildren: () => import('./subForms/subForms.module').then(m => m.SubFormsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
