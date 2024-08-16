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

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.account = this.accountService.getAccountDetails();
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
  }


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

