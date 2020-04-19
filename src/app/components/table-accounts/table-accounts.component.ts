import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-table-accounts',
  templateUrl: './table-accounts.component.html',
  styleUrls: ['./table-accounts.component.scss']
})
export class TableAccountsComponent implements OnInit {

   accounts;
   searchAcc;
 constructor(private auth: AuthentificationService) { }

  ngOnInit() {
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
 /* applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  } */
}

