import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ExperienceElement } from './experience-element/experience-element';
@Component({
  selector: 'app-landing',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, ExperienceElement],
  templateUrl: './landing.html',
  styles: ``,
})
export class Landing {}
