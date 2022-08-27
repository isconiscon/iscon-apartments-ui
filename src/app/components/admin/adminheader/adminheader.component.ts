import { UserService } from './../../../services/user.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.scss'],
})
export class AdminheaderComponent implements OnInit {
  currentUser: string;
  currentRole: string;
  body: any;
  profileData: any;
  isProfileEdit: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    config: NgbDropdownConfig,
    private sharedService: SharedService,
    private userService: UserService
  ) {
    config.autoClose = true;
  }

  ngOnInit(): void {
    this.body = document.getElementsByTagName('body')[0];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    this.currentRole = localStorage.getItem('currentUserRole') || '';
    if (this.currentRole === 'Admin') {
      this.body.classList.add('admin');
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goToHome() {
    this.router.navigate(['/admin/dashboard']);
  }
  editProfile() {
    this.userService
      .getUserBasedOnName(this.currentUser)
      .subscribe((userdata: any) => {
        this.isProfileEdit = true;
        // console.log('Profile data == ', userdata);
        this.profileData = userdata;
        console.log('profile edit call ==', this.profileData);
      });
  }
}
