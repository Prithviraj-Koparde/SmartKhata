import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAmountComponent } from './update-amount/update-amount.component';
import { ViewAccountComponent } from './view-account/view-account.component';

export const routes: Routes = [

    { path: 'accounts', component: AccountListComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'updateAmount/:id', component: UpdateAmountComponent },
    { path: '', redirectTo: 'accounts', pathMatch: 'full' },
    { path: 'viewAccount/:id', component: ViewAccountComponent }
];
