import { NgOptimizedImage } from '@angular/common';
import { Component  } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-landing',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './landing.html',
  styles: ``,
})
export class Landing {}
