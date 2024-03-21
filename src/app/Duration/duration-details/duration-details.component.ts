import { Component } from '@angular/core';
import { Duration } from '../../Model/duration';

@Component({
  selector: 'app-duration-details',
  templateUrl: './duration-details.component.html',
  styleUrl: './duration-details.component.css'
})
export class DurationDetailsComponent {
  duration:Duration=new Duration();
  onSubmit(){

  }
}
