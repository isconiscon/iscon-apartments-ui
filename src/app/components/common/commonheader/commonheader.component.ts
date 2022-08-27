import { NavigationEnd, Router, Event } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-commonheader',
  templateUrl: './commonheader.component.html',
  styleUrls: ['./commonheader.component.scss'],
})
export class CommonheaderComponent implements OnInit {
  currentRoute: any;
  isLoginPage: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe((x) => {
        this.currentRoute = x;
        if (this.currentRoute.url === '/login') {
          this.isLoginPage = true;
        } else {
          this.isLoginPage = false;
        }
        console.log('current router == ', this.currentRoute.url);
      });
  }
}
