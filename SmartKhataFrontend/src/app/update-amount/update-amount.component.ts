import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../account';

@Component({
  selector: 'app-update-amount',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-amount.component.html',
  styleUrl: './update-amount.component.css'
})
export class UpdateAmountComponent {

  account: Account = new Account();

  onSubmit() {

  }
}
