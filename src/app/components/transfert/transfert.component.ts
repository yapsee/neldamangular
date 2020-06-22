import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.scss']
})
export class TransfertComponent implements OnInit {
transfert: FormGroup;
  constructor( private auth: AuthentificationService, private route: Router) { }

  ngOnInit() {
    this.transfert = new FormGroup({
    phonebenef: new FormControl(''),
    nombenef: new FormControl(''),
    nomsender: new FormControl(''),
    montantdepot: new  FormControl(''),
    phonesender: new FormControl(''),
    });
  }
  OnEnvoi() {
 const envoi = {
   nomsender : this.transfert.value.nomsender,
   phonesender : this.transfert.value.phonesender,
   nombenef : this.transfert.value.nombenef,
   phonebenef : this.transfert.value.phonebenef,
   montantdepot : this.transfert.value.montantdepot,
 };
 this.auth.postEnvoi(envoi).subscribe(
  data => {
    console.log(data);
    alert(JSON.stringify('Transfert effectue avec succes Merci d/avoir fait confiance a NELDAMPAY'));
    this.route.navigate(['home']);

});
}p


}
