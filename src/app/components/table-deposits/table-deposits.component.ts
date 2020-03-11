import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-table-deposits',
  templateUrl: './table-deposits.component.html',
  styleUrls: ['./table-deposits.component.scss']
})
export class TableDepositsComponent implements OnInit {
  depots;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {}

  Ondepot() {
    this.auth.getDepots().subscribe(
      data => {
        this.depots = data['hydra:member'];
        console.log(data['hydra:member']
        ); },
        error => {
          alert('Veuiller vous connecter');
          console.log(error);
        }
    );

  }
}

