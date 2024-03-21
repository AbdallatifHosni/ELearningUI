import { Component } from '@angular/core';
import { Feedback } from '../../Model/feedback';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrl: './feedback-details.component.css'
})
export class FeedbackDetailsComponent {
  
  feedback:Feedback=new Feedback();
  
  onSubmit(){

  }
}
