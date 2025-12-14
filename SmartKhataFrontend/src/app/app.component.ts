import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AccountListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartKhata_Frontend';
}
