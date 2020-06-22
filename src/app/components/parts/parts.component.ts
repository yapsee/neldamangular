import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Transactions } from '../../models/transactions';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  transactions;
  pipe: DatePipe;
  filterForm: FormGroup;
   get fromDate() { return this.filterForm.get('fromDate').value; }
   get toDate() { return this.filterForm.get('toDate').value; }

 constructor(private auth: AuthentificationService) {}

  ngOnInit() {
   this.filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(), });
   this.auth.getTrans().subscribe(
      data => {
        this.transactions = data['hydra:member'];
        console.log(data['hydra:member']
        ); },

    );
   this.pipe = new DatePipe('en');
   this.transactions.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
       return data.datedenvoi >= this.fromDate && data.datedenvoi <= this.toDate;
      }
      return true;
    };
      }
    applyFilter() {
    this.transactions.filter = '' + Math.random();
  }
}
