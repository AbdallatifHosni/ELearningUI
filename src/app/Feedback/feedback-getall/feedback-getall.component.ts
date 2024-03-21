import { Component } from '@angular/core';
import { Feedback } from '../../Model/feedback';

@Component({
  selector: 'app-feedback-getall',
  templateUrl: './feedback-getall.component.html',
  styleUrl: './feedback-getall.component.css'
})
export class FeedbackGetallComponent {
  feedbackEntries:Feedback []=[];
}
