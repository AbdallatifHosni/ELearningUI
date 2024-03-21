import { Component } from '@angular/core';
import { Adminstrator } from '../../Model/adminstrator';

@Component({
  selector: 'app-administrator-getall',
  templateUrl: './administrator-getall.component.html',
  styleUrl: './administrator-getall.component.css'
})
export class AdministratorGetallComponent {
  administrators:Adminstrator[]=[];
  
}
