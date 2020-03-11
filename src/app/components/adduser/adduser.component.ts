import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  userform: FormGroup;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {
    this.userform = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
     nom: new FormControl(''),
        password: new FormControl(''),
            isActive: new FormControl(''),
                 role: new FormControl(''),
                  partenaire: new FormControl('')
     });
  }



AddUser(data) {

  console.log(this.userform.value);
  let user = {
    username: this.userform.value.username,
     nom: this.userform.value.nom,
      email: this.userform.value.email,
        password: this.userform.value.password,
            isActive: this.userform.value.isActive,
                 role: this.userform.value.role,
                  partenaire: this.userform.value.partenaire

  };
  this.auth.PostUser(user).subscribe(
    data=>{
      console.log(data);
    }
  );

}
}
