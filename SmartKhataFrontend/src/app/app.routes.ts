import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAmountComponent } from './update-amount/update-amount.component';

export const routes: Routes = [

    { path: 'accounts', component: AccountListComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'updateAmount/:id', component: UpdateAmountComponent },
    { path: '', redirectTo: 'accounts', pathMatch: 'full' }
];
