import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AccountListComponent } from './account-list/account-list.component';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartKhata';
}
