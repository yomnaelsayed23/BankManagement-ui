// src/app/account.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // Sample account data
  private account = {
    id: 1,
    cardNumber: '1234-5678-9101-1121',
    cvv: '123',
    balance: 1000.50,
    transactions: [
      { date: '2024-08-01', amount: -100.00, description: 'Grocery Shopping', type: 'Withdrawal' },
      { date: '2024-08-03', amount: -50.00, description: 'Gas Station', type: 'Withdrawal' },
      { date: '2024-08-05', amount: 500.00, description: 'Salary Credit', type: 'Deposit' },
    ],
  };

  constructor() {}

  // Method to get the account details
  getAccountDetails() {
    return this.account;
  }
}
