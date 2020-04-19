import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {
  retrait: FormGroup;
  found: any;
  // auto declarations
  nombenef: any;
  nomsender: any;
  montantnet: any;
  phonesender: any;
  phonebenef: any;
  compte: any;
  idpart: any;
  ninbenef: any;
  idtrans: any;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.retrait = new FormGroup({
    code: new FormControl(''),
    ninbenef: new FormControl(''),
    phonebenef: new FormControl(''),
    nombenef: new FormControl(''),
    nomsender: new FormControl(''),
    montantnet: new  FormControl(''),
    phonesender: new FormControl(''),
  });
    this.search();
  }
// recherchercode
search() {

  this.retrait.get('code').valueChanges.subscribe(val => {

    this.auth.searchCode(val).subscribe(
      data => {
        // console.log(this.retrait = data['hydra:member']);
        if (data['hydra:member'][0] ) {
        this.idtrans = data['hydra:member'][0].id;

        this.nombenef = data['hydra:member'][0].nombenef;
        this.nomsender = data['hydra:member'][0].nomsender;
        this.montantnet = data['hydra:member'][0].montantnet;
        this.phonesender = data['hydra:member'][0].phonesender;
        this.phonebenef = data['hydra:member'][0].phonebenef;
        this.ninbenef = data['hydra:member'][0].ninbenef;
        // Masquer les champs apres recherche
        this.retrait.get('nombenef').disable();
        this.retrait.get('nomsender').disable();
        this.retrait.get('montantnet').disable();
        this.retrait.get('phonesender').disable();
        this.retrait.get('phonebenef').disable();
}
   });
   }
 );
}
 OnRetrait() {
    const retrait = {
          id: this.idtrans,
          ninbenef: this.retrait.value.ninbenef,
     };
    this.auth.faireRetrait(retrait).subscribe(
        data => {
          console.log(data);
        }
      );
 }

}

