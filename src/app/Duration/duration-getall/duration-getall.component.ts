import { Component } from '@angular/core';
import { Duration } from '../../Model/duration';

@Component({
  selector: 'app-duration-getall',
  templateUrl: './duration-getall.component.html',
  styleUrl: './duration-getall.component.css'
})
export class DurationGetallComponent {
  durations:Duration[]=[];
}
