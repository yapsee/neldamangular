import { Role } from './../../models/role';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';


@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {

   userform: FormGroup;
   roles: any;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    // RECUPERATION ROLES POUR AFFICHER DANS LE FORMULAIRE
     this.auth.getLibelle().subscribe(
     (res: Role) => {
        this.roles = res['hydra:member'];
        console.log(this.roles );
      });


// DECLARER LES ATTRIBUTS AS FORMCONTROL
     this.userform = new FormGroup({
     username: new FormControl(''),
     email: new FormControl(''),
     nom: new FormControl(''),
     password: new FormControl(''),
     role: new FormControl(''),

     });
  }



OnAdduser() {

  // console.log(this.userform.value);
  const user = {
    username: this.userform.value.username,
     nom: this.userform.value.nom,
      email: this.userform.value.email,
       role: this.userform.value.role,
         password: this.userform.value.password,
  };
  this.auth.postUser(user).subscribe(
    data => {
      console.log(data);
    }
  );

}
}
