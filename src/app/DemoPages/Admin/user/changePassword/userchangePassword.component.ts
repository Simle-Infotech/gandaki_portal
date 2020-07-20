import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-admin-user-change-password',
  templateUrl: './userchangePassword.component.html',
  styles: []
})
export class UserchangePasswordComponent implements OnInit {
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
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

