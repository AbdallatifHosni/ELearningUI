import { Component } from '@angular/core';
import { Course } from '../../Model/course';

@Component({
  selector: 'app-course-getbyid',
  templateUrl: './course-getbyid.component.html',
  styleUrl: './course-getbyid.component.css'
})
export class CourseGetbyidComponent {
  course:Course=new Course();
  onSubmit(){

    
  }
}
