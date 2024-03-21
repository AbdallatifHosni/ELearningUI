import { Component } from '@angular/core';
import { Content } from '../../Model/content';

@Component({
  selector: 'app-content-getbyid',
  templateUrl: './content-getbyid.component.html',
  styleUrl: './content-getbyid.component.css'
})
export class ContentGetbyidComponent {
  content:Content=new Content();

  onSubmit(){

  }
}
