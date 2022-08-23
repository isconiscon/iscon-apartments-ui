import { UserService } from './../../../../services/user.service';
import { SharedService } from './../../../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss'],
})
export class AdminhomeComponent implements OnInit {
  loginUserData: any;
  constructor(
    private sharedService: SharedService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.sharedService.getLoginUserInformation().subscribe((data: any) => {
      if (data) {
        console.log('Login user information = ', data);
      }
    });

    this.userService.getUserBasedOnName('Admin5').subscribe((userdata: any) => {
      console.log('Login data in login component == ', userdata);
      if (userdata) {
        this.loginUserData = userdata;
        this.sharedService.setLoginUserInformation(this.loginUserData);
      }
    });
  }
}
