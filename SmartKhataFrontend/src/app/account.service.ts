import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/accounts"

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseUrl}/allAccounts`);
  }

  createAccount(account:Account): Observable<Account>{
    return this.httpClient.post<Account>(`${this.baseUrl}`,account)
  }
}
