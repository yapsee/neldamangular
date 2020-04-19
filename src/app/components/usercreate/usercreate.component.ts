import { Router } from '@angular/router';
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
   roles;

  constructor(private auth: AuthentificationService, private route: Router) { }

  ngOnInit() {

// DECLARER LES ATTRIBUTS AS FORMCONTROL
     this.userform = new FormGroup({
      nom: new FormControl(''),
     username: new FormControl(''),
     password: new FormControl(''),
     role: new FormControl(''),
     email: new FormControl(''),

     });
 // RECUPERATION ROLES POUR AFFICHER DANS LE FORMULAIRE

     this.auth.getLibelle().subscribe(
       data => {
         this.roles = data['hydra:member'];
         console.log(data['hydra:member']);
       });
  }



OnAdduser() {
 console.log(this.userform.value);
 const user = {
   nom : this.userform.value.nom,
   username : this.userform.value.username,
   password : this.userform.value.password,
   email : this.userform.value.email,
   role : `/api/roles/${this.userform.value.role}`,
 };
 this.auth.postUser(user).subscribe(
  data => {
    console.log(data);
    localStorage.setItem('token', data.token);
    this.route.navigate(['table-users']);

});
}
}
