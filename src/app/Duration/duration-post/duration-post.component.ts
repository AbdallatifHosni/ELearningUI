import { Component } from '@angular/core';
import { Duration } from '../../Model/duration';

@Component({
  selector: 'app-duration-post',
  templateUrl: './duration-post.component.html',
  styleUrl: './duration-post.component.css'
})
export class DurationPostComponent {
  duration:Duration=new Duration();
  onSubmit(){
    
  }

}
