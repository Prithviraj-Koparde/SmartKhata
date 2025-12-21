import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {

  accounts: Account[] = [];
  account: Account = new Account();
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.getAccounts();
  }
  getAccounts() {

    this.accountService.getAllAccounts().subscribe(data => {

      this.accounts = data;
    })
  }

  updateAmount(id: number) {
    this.router.navigate(['/updateAmount', id]);
  }

  deleteAccount(id: number) {
    if (this.account.debt > 0) {
      return;
    }
    this.accountService.deleteAccount(id).subscribe(data => {
      console.log(data);
      this.getAccounts();
    })
  }

  viewAccount(id: number) {

    this.router.navigate(['/viewAccount', id]);

  }

  status(debt: number): String {
    return debt > 0 ? 'UNPAID' : 'PAID';
  }

  // validDelete(debt:number): String{
  //   if(debt>0){
  //     return console.error('Amount is UNPAID!!');
  //   }
  //   return console.error('Deleted Successfully!');
  // }
}
