import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserRoles } from '../../constants/userrole';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  userRole: any;
  isAdmin: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    // this.router.navigate([{ outlet: { admin: ['admin/home'] } }]);
  }

  ngOnInit(): void {
    // this.userRole = JSON.parse(
    //   localStorage.getItem('currentUser') || ''
    // ).userRole;
    // this.isAdmin = this.userRole.some((role: any) =>
    //   UserRoles.admin.toLowerCase().includes(role.toLowerCase())
    // );
    // if (this.isAdmin) {
    //   document.getElementsByTagName('body')[0].classList.add('admin-body');
    // }
  }
}
