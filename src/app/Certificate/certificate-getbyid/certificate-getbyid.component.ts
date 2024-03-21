import { Component } from '@angular/core';
import { Certificate } from '../../Model/certificate';

@Component({
  selector: 'app-certificate-getbyid',
  templateUrl: './certificate-getbyid.component.html',
  styleUrl: './certificate-getbyid.component.css'
})
export class CertificateGetbyidComponent {
  certificate:Certificate=new Certificate();
  
  GetById(){

  }
}
