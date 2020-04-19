import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.scss']
})
export class AffectationComponent implements OnInit {

  affect: FormGroup;
  users;
  accounts;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.affect = new FormGroup({

      compte: new FormControl(''),
      affectedto: new FormControl(''),
      datedebut: new FormControl(''),
      datefin: new FormControl(''),

    });
    // RECUPERATION COMPTES ET USERS POUR AFFICHER DANS LE FORMULAIRE

    this.auth.getUsers().subscribe(
       data => {
         this.users = data['hydra:member'];
         console.log(data['hydra:member']);
       });
    this.auth.getAccounts().subscribe(
       data => {
         this.accounts = data['hydra:member'];
         console.log(data['hydra:member']);
       });
  }
  OnAffect() {
 const affect = {
   compte : `/api/bank_accounts/${this.affect.value.compte}`,
   affectedto: `/api/users/${this.affect.value.affectedto}`,
   datedebut: this.affect.value.datedebut,
   datefin: this.affect.value.datefin
 };
 this.auth.Affecter(affect).subscribe(
  data => {
    console.log(data);

});
}


}
