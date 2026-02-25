import { Component } from '@angular/core';
import {HomeStats} from './home-stats/home-stats';

@Component({
  selector: 'app-home',
  imports: [
    HomeStats
  ],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  photos = [
    {
      url: 'https://placehold.co/200x200'
    },
    {
      url: 'https://placehold.co/200x200'
    },
    {
      url: 'https://placehold.co/200x200',
      extraCount: "1.5k"
    },
  ];

}
