import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';

@Component({
  selector: 'app-view-account',
  imports: [],
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.css'
})
export class ViewAccountComponent {

  id: number = 0;
  account: Account = new Account()
  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id']
    this.accountService.getAccountById(this.id).subscribe(data => {

      this.account = data;

    })
  }

  goBack() {
    this.router.navigate(['/accounts'])
  }
}
