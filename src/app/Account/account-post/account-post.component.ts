import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../../Model/account';
@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrl: './account-post.component.css'
})
export class AccountPostComponent {
 account:Account=new Account();

 onSubmit(){
  
 }
}
