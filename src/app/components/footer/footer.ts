import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage,
    RouterOutlet
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
