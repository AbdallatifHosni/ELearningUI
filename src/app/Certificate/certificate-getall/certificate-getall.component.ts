import { Component } from '@angular/core';
import { Certificate } from '../../Model/certificate';

@Component({
  selector: 'app-certificate-getall',
  templateUrl: './certificate-getall.component.html',
  styleUrl: './certificate-getall.component.css'
})
export class CertificateGetallComponent {
  
  certificates:Certificate[]=[];

}
