import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Application',
      status: false
    },
    children: [
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'mailbox',
        loadChildren: () => import('./mailbox/mailbox.module').then(m => m.MailBoxModule)
      },
      {
        path: 'material-tabs',
        loadChildren: () => import('./material-tabs/material-tabs.module').then(m => m.MaterialTabsModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
