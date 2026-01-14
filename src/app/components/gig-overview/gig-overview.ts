import {Component, Input} from '@angular/core';
import {Gig} from '../gig.model';

@Component({
  selector: 'app-gig-overview',
  imports: [],
  templateUrl: './gig-overview.html',
  styleUrl: './gig-overview.css',
})
export class GigOverview {
  @Input() gig!: Gig;
}
