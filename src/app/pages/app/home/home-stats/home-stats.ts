import { Component } from '@angular/core';

@Component({
  selector: 'app-home-stats',
  imports: [],
  templateUrl: './home-stats.html',
  styles: ``,
})
export class HomeStats {
  stats = [
    {
      value: '1,247', label: 'Photos'
    },
    {
      value: '142', label: 'Guests'
    },
    {
      value: '3.8k', label: 'Views'
    },
  ];

}
