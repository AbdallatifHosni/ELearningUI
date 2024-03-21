import { Component } from '@angular/core';
import { Certificate } from '../../Model/certificate';

@Component({
  selector: 'app-certificate-delete',
  templateUrl: './certificate-delete.component.html',
  styleUrl: './certificate-delete.component.css'
})
export class CertificateDeleteComponent {
  certificate: Certificate=new Certificate();

  onSubmit(){
    
  }
}
