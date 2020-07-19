import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
  selector: 'app-admin-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  userProfile;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.userProfile = this.authenticationService.CurrentUserValue;
    console.log(this.userProfile);
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

