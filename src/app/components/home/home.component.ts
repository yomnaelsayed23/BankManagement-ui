import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    CommonModule,
    FormsModule ,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  account: any;
  // accounts!:any[]
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.account = this.accountService.getAccountDetails();
  }
  accounts = [
    {
      id: 1,
      cardNumber: '1234-5678-9012-3456',
      cvv: '123',
      balance: 1500.75,
      transactions: [
        { date: '2024-08-01', type: 'Deposit', amount: 500.00, description: 'Salary' },
        { date: '2024-08-05', type: 'Withdrawal', amount: -100.00, description: 'Groceries' },
        { date: '2024-08-10', type: 'Withdrawal', amount: -50.00, description: 'Utility Bill' }
      ]
    },
    {
      id: 2,
      cardNumber: '9876-5432-1098-7654',
      cvv: '456',
      balance: 3200.00,
      transactions: [
        { date: '2024-08-03', type: 'Deposit', amount: 1000.00, description: 'Freelance Payment' },
        { date: '2024-08-07', type: 'Withdrawal', amount: -200.00, description: 'Restaurant' },
        { date: '2024-08-15', type: 'Withdrawal', amount: -120.00, description: 'Shopping' }
      ]
    }
  ];
}
  // addCard() {
  //   // Here you would usually make a service call to save the card details
  //   console.log('Card Added:', this.newCard);
  //   // After adding the card, reset the form and close the modal
  //   this.newCard = { cardNumber: '', cardHolder: '' };
  //   let modal = document.getElementById('addCardModal');
  //   if (modal) {
  //     (modal as any).modal('hide');
  //   }
  


  // user = {
  //   name: 'yomna',
  //   email: 'yomna@example.com',
  //   cartNum: 888855555877775,
  // };

  // transactions = [
  //   { id: 'T001', date: new Date('2023-08-10'), amount: 150.00, credit: 'Visa' },
  //   { id: 'T002', date: new Date('2023-08-11'), amount: 200.00, credit: 'MasterCard' },
  //   { id: 'T003', date: new Date('2023-08-12'), amount: 100.00, credit: 'Visa' },

  // ];

  // addNewCart(){

  // }
  // getAccounts(){

  //   this.getProductServices.getAllProducts().subscribe((res:any)=>{
  //   this.products = res
  //   this.loading= false
  // },
  //    error =>{
  //     this.loading = false
  //     alert("error")
  //   }
  // )
  // }

