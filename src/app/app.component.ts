import { SharedService } from './services/shared.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'iscon-apartments-ui';
  isAdmin: boolean = false;
  currentRole: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    console.log('Oninit in app component == ');
    this.sharedService.getUserRole().subscribe((role: any) => {
      console.log(
        'Current role in app comp == ',
        localStorage.getItem('currentUserRole')
      );
      this.currentRole = localStorage.getItem('currentUserRole') || '';
      if (this.currentRole) {
        if (this.currentRole === 'Admin') {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }
      }
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
