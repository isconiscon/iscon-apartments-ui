import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminuserdetails',
  templateUrl: './adminuserdetails.component.html',
  styleUrls: ['./adminuserdetails.component.scss'],
})
export class AdminuserdetailsComponent implements OnInit {
  @Input() userInformation: any;
  constructor() {}

  ngOnInit(): void {}
}
