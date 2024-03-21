import { Component } from '@angular/core';
import { Quiz } from '../../Model/quiz';

@Component({
  selector: 'app-quiz-getbyname',
  templateUrl: './quiz-getbyname.component.html',
  styleUrl: './quiz-getbyname.component.css'
})
export class QuizGetbynameComponent {
  quiz:Quiz=new Quiz();
  onSubmit(){

  }
}
