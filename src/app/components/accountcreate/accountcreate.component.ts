import { Router } from '@angular/router';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-accountcreate',
  templateUrl: './accountcreate.component.html',
  styleUrls: ['./accountcreate.component.scss']
})
export class AccountcreateComponent implements OnInit {
  compte: FormGroup;
  bank;
  // autodeclar
  regicomm: any;
  email: any;
  username: any;
  nom: any;
  password: any;
  found: number;
  idpart: any;
  constructor(private auth: AuthentificationService, private route: Router) { }

  ngOnInit() {
      this.compte = new FormGroup({
      username: new FormControl(''),
             password: new FormControl(''),
              nom: new FormControl(''),
                email: new FormControl(''),
                ninea: new FormControl(''),
                regicomm: new FormControl(''),
                 montant: new FormControl(''),
  });
      this.search();
      this.found = 0;
  }

  // rechercher ninea
  search() {

  this.compte.get('ninea').valueChanges.subscribe(val => {

    this.auth.searchNinea(val).subscribe(
      data => {
        console.log(this.bank = data['hydra:member']);
        if (data['hydra:member'][0]) {
        this.found = 1;
        this.regicomm = data['hydra:member'][0].partenaire.regicomm;
        this.nom = data['hydra:member'][0].partenaire.users[0].nom;
        this.email = data['hydra:member'][0].partenaire.users[0].email;
        this.username = data['hydra:member'][0].partenaire.users[0].username;
        this.password = data['hydra:member'][0].partenaire.users[0].password;
         // Masquer les champs apres recherche
        this.compte.get('nom').disable();
        this.compte.get('regicomm').disable();
        this.compte.get('email').disable();
        this.compte.get('username').disable();
        this.compte.get('password').disable();

        // recuperer id partenaire pour creer un compte
        this.idpart = (data['hydra:member'][0].partenaire['@id']);

        } else {
        this.compte.get('nom').enable();
        this.compte.get('regicomm').enable();
        this.compte.get('email').enable();
        this.compte.get('username').enable();
        this.compte.get('password').enable();
          }
   });
   }
 );
 }
  OnCompte() {
 // Pour un nouveau partenaire
  if (!this.found) {
    const bank = {

        partenaire: {
          regicomm: this.compte.value.regicomm,
          ninea: this.compte.value.ninea,
          users: [
            {
              email: this.compte.value.email,
              username: this.compte.value.username,
              nom: this.compte.value.nom,
              password: this.compte.value.password,
           }
          ]
        },
            depots: [
          {
            montant: this.compte.value.montant
          }
        ]
      };
    this.auth.postBank(bank).subscribe(
        data => {
          //console.log(data);
        alert(JSON.stringify('Vous venez de creer un compte pour un nouveau partenaire'));

        }
      );
 } else { // Pour partenaire existant on renseigne id part et montant a deposer
    const bank = {
        partenaire: {id: this.idpart},
            depots: [
          {
            montant: this.compte.value.montant
          }
        ]
      };

    this.auth.postBank(bank).subscribe(
        data => {
          //console.log(data);
          alert(JSON.stringify('Vous venez de creer un nouveau compte pour le partenaire dont vous ave saisi le ninea'));
        });
 }

}}
