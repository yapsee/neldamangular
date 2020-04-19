import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
 users;
  user: any;
  searchUser;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
  this.auth.getUsers().subscribe(
      data => {
        this.users = data['hydra:member'];
         },
        error => {
          alert('Veuiller vous connecter');
          console.log(error);
        }
    );

   }
   // changement statut d'un user
  OnChange(id: number) {
 this.auth.blockUser(id).subscribe(
  data => {
    console.log(data);

});
}

 displayImage(user: User) {
    if (this.users.image) {    // conflit entre user et users
        return this.auth.getImage(user);
    } else {
      return null;
    }
  }
}

