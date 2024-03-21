import { Component } from '@angular/core';
import { Adminstrator } from '../../Model/adminstrator';

@Component({
  selector: 'app-administrator-post',
  templateUrl: './administrator-post.component.html',
  styleUrl: './administrator-post.component.css'
})
export class AdministratorPostComponent {
  administrator: Adminstrator=new Adminstrator();
  
  onSubmit(){

  }
}
