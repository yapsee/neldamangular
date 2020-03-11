import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-table-accounts',
  templateUrl: './table-accounts.component.html',
  styleUrls: ['./table-accounts.component.scss']
})
export class TableAccountsComponent implements OnInit {

   accounts;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.Onaccount();
   }

  Onaccount() {
    this.auth.getAccounts().subscribe(
      data => {
        this.accounts = data['hydra:member'];
        console.log(data['hydra:member']
        ); },
        error => {
          alert('Veuiller vous connecter');
          console.log(error);
        }
    );

  }
}

