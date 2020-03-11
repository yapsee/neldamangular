import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

   users;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.Onusers();
   }

  Onusers() {
    this.auth.getUsers().subscribe(
      data => {
        this.users = data['hydra:member'];
        console.log(data['hydra:member']
        ); },
        error => {
          alert('Veuiller vous connecter');
          console.log(error);
        }
    );

  }
}

