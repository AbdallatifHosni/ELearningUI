import { Component } from '@angular/core';
import { Adminstrator } from '../../Model/adminstrator';

@Component({
  selector: 'app-administrator-getbyname',
  templateUrl: './administrator-getbyname.component.html',
  styleUrl: './administrator-getbyname.component.css'
})
export class AdministratorGetbynameComponent {
  administrator:Adminstrator=new Adminstrator();
  
  onSubmit(){
    
  }


}
