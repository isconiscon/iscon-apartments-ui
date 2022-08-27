import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-indexhome',
  templateUrl: './indexhome.component.html',
  styleUrls: ['./indexhome.component.scss'],
})
export class IndexhomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  body: any;
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.body = document.getElementsByTagName('body')[0];
    this.body.classList.add('user');
    this.body.classList.remove('login');
  }
}
