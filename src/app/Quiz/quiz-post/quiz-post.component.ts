import { Component } from '@angular/core';
import { Quiz } from '../../Model/quiz';

@Component({
  selector: 'app-quiz-post',
  templateUrl: './quiz-post.component.html',
  styleUrl: './quiz-post.component.css'
})
export class QuizPostComponent {
  quiz:Quiz=new Quiz();
  onSubmit(){
  }
}
