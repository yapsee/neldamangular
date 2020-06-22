import { Router } from '@angular/router';
import { BankAccount } from './../../models/bank-account';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  depot;
  deposer: FormGroup;
  accounts: any;

  constructor(private auth: AuthentificationService, private route: Router) { }

ngOnInit() {
    this.deposer = new FormGroup({
      montant:  new FormControl(''),
       compte:  new FormControl(''),

    });
     // RECUPERATION DES COMPTES
    this.auth.getAccounts().subscribe(
      data => {
         this.accounts = data['hydra:member'];
         console.log(data['hydra:member']);
       });
  }


OnDeposit() {

  const depot = {
    montant: this.deposer.value.montant,
   compte: `/api/bank_accounts/${this.deposer.value.compte}`,
  };
  this.auth.postDepot(depot).subscribe(

    data => {
// console.log(data);
 alert(JSON.stringify('Vous venez de deposer une somme de' + data.montant + 'sur ce compte'));

 localStorage.setItem('token', data.token);
 this.route.navigate(['table-deposits']);
    }

  );
}
}
