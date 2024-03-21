import { Component } from '@angular/core';
import { Certificate } from '../../Model/certificate';

@Component({
  selector: 'app-certificate-post',
  templateUrl: './certificate-post.component.html',
  styleUrl: './certificate-post.component.css'
})
export class CertificatePostComponent {
  certificate : Certificate = new Certificate();


  onSubmit(){

  }
}
