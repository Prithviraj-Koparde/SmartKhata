import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {


  onSubmit() {
    this.saveAccount();
  }
  account: Account = new Account();
  constructor(private accountService: AccountService, private router: Router) { }

  saveAccount() {

    this.accountService.createAccount(this.account).subscribe(data => {
      console.log(data);
      this.goToAccountList();
    })
  }

  goToAccountList() {
    this.router.navigate([`/accounts`])
  }
}
