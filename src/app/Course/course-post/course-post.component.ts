import { Component } from '@angular/core';
import { Course } from '../../Model/course';

@Component({
  selector: 'app-course-post',
  templateUrl: './course-post.component.html',
  styleUrl: './course-post.component.css'
})
export class CoursePostComponent {
  course:Course=new Course();
  onSubmit(){

  }
}
