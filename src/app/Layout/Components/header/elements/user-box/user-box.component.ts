import { Component, OnInit } from '@angular/core';
import { ThemeOptions } from '../../../../../theme-options';
import {AuthenticationService} from "../../../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
  isLoggedIn = false;

  toggleDrawer() {
    this.globals.toggleDrawer = !this.globals.toggleDrawer;
  }

  constructor(
    public globals: ThemeOptions,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.authenticationService.CurrentUserValue) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

  login(){
    this.router.navigate(['login']);
  }

  navigateToProfile(){
    this.router.navigate(['/admin/user/profile']);
  }

  navigateToUpdateProfile(){
    this.router.navigate(['/admin/user/update']);
  }

  navigateToChangePassword(){
    this.router.navigate(['/admin/user/updatePassword']);
  }

}
