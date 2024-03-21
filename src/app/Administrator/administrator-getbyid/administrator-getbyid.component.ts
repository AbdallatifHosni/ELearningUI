import { Component } from '@angular/core';
import { Adminstrator } from '../../Model/adminstrator';

@Component({
  selector: 'app-administrator-getbyid',
  templateUrl: './administrator-getbyid.component.html',
  styleUrl: './administrator-getbyid.component.css'
})
export class AdministratorGetbyidComponent {
  administrator:Adminstrator=new Adminstrator();

  update(){

  }
}
