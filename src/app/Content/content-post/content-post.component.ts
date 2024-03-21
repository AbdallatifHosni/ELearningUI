import { Component } from '@angular/core';
import { Certificate } from '../../Model/certificate';
import { Content } from '../../Model/content';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrl: './content-post.component.css'
})
export class ContentPostComponent {
  content:Content=new Content();
  onSubmit(){

  }
}
