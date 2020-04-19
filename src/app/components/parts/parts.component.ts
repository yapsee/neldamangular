import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {
  transactions;
   searchParts;
  pipe: DatePipe;
  fromDate: any;
  toDate: any;
   filterForm: FormGroup;
 constructor(private auth: AuthentificationService) { }

  ngOnInit() {
   this.filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
});
   this.auth.getTrans().subscribe(
      data => {
        this.transactions = data['hydra:member'];
        console.log(data['hydra:member']
        ); },
        error => {
          alert('Veuiller vous connecter');
          console.log(error);
        }
    );
   this.pipe = new DatePipe('en');
   this.transactions.filterPredicate = (data, filter) => {
      if (this.fromDate && this.toDate) {
        return data.datedenvoi >= this.fromDate && data.datedenvoi <= this.toDate;
      }
      return true;
    };
      }
       OnFilter() {
    this.transactions.filter = ''+Math.random();
  }
}
