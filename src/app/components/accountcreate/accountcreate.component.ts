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
  constructor(private auth: AuthentificationService) { }

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
  }
  OnCompte() {
    console.log(this.compte.value);
    const bank= {

        partenaire: {
          regicomm: this.compte.value.regicomm,
          ninea: this.compte.value.ninea,
          users: [
            {
              email: this.compte.value.email,
              password: this.compte.value.password,
              username: this.compte.value.username,
              nom: this.compte.value.nom,

              }
          ]
        },
            depots: [
          {
            montant: this.compte.value.montant
          }
        ]
      };
    console.log(bank);
    this.auth.postBank(bank).subscribe(
        data => {
          console.log(data);
        }
      );
 }

}
