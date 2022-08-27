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
  dialogOpen: boolean = false;
  isEdit: boolean = false;
  isAdd: boolean = false;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: any) => {
      if (data) {
        this.users = data.userDataList;
        console.log('Users 111 == ', this.users);
      }
    });
    console.log('All users == ', JSON.stringify(this.users));
  }
  onEdit(data: any) {
    this.dialogOpen = true;
    this.isEdit = true;
    this.isAdd = false;
    this.editableData = data;
    console.log('Editable data === ', this.editableData);
  }
  onAddUser() {
    this.dialogOpen = true;
    this.isEdit = false;
    this.isAdd = true;
    this.editableData = {};
  }
  onDelete(userId: any) {
    this.userService.deleteUser(userId).subscribe((ele) => {
      console.log('Deleted Successfully');
    });
  }
}
