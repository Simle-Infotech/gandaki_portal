import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./profile/user.component";
import {UserProfileComponent} from "./updateProfile/userProfile.component";
import {UserchangePasswordComponent} from "./changePassword/userchangePassword.component";

const routes: Routes = [
  {
    path: 'profile',
    component: UserComponent,
    data: {
      title: 'User'
    }
  },
  {
    path: 'update',
    component: UserProfileComponent,
    data: {
      title: 'User'
    }
  },
  {
    path: 'updatePassword',
    component: UserchangePasswordComponent,
    data: {
      title: 'User'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
