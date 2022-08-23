import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminallusers',
  templateUrl: './adminallusers.component.html',
  styleUrls: ['./adminallusers.component.scss'],
})
export class AdminallusersComponent implements OnInit {
  users: any = [];
  editableData: any;
  display: boolean = false;
  isEdit: boolean = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data.userDataList;
    });
    console.log('All users == ', JSON.stringify(this.users));
  }
  onEdit(data: any) {
    this.isEdit = true;
    this.editableData = data;
    console.log('Editable data === ', this.editableData);
    this.display = true;
  }
}
