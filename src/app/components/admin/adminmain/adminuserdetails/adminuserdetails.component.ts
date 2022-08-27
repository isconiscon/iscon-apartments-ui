import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminuserdetails',
  templateUrl: './adminuserdetails.component.html',
  styleUrls: ['./adminuserdetails.component.scss'],
})
export class AdminuserdetailsComponent implements OnInit {
  @Input() userInformation: any;
  @Input() isEdit: any;
  @Input() isUserAdd: any;
  cities: any[] = [];
  checked: boolean = false;
  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngOnInit(): void {
    console.log('Is user edit == ', this.isEdit);
    console.log('Is add edit == ', this.isUserAdd);
  }
}
