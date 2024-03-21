import { Component } from '@angular/core';
import { Feedback } from '../../Model/feedback';

@Component({
  selector: 'app-feedback-getbyname',
  templateUrl: './feedback-getbyname.component.html',
  styleUrl: './feedback-getbyname.component.css'
})
export class FeedbackGetbynameComponent {
  feedback:Feedback=new Feedback();
  onSubmit(){

  }
}
