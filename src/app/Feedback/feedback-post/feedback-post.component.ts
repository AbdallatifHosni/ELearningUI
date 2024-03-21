import { Component } from '@angular/core';
import { Feedback } from '../../Model/feedback';

@Component({
  selector: 'app-feedback-post',
  templateUrl: './feedback-post.component.html',
  styleUrl: './feedback-post.component.css'
})
export class FeedbackPostComponent {
  feedback:Feedback=new Feedback();
  onSubmit(){

  }
}
