import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-amount',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-amount.component.html',
  styleUrl: './update-amount.component.css'
})
export class UpdateAmountComponent {

  id: number = 0;
  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { }
  account: Account = new Account();

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];   //route with help of ActivatedRoute will initialize id with 'id' parameter
    this.accountService.getAccountById(this.id).subscribe(data => {
      this.account = data;

    })
  }

  onSubmit() {
    this.accountService.updateCustomerAmount(this.id, this.account.debt).subscribe(data => {
      this.account = data;
      this.router.navigate(['/accounts'])
    })
  }
}
