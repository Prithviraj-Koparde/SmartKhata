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
    this.accountService.deleteAccount(id).subscribe(data => {
      console.log(data);
      this.getAccounts();
    })
  }
}
