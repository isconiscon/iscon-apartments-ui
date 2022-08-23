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
  constructor(
    private authService: AuthService,
    private router: Router,
    config: NgbDropdownConfig,
    private sharedService: SharedService
  ) {
    config.autoClose = false;
  }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser') || '';
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goToHome() {
    this.router.navigate(['/admin/home']);
  }
}
