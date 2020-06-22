
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

formConnexion: FormGroup;

  constructor(private auth: AuthentificationService , private route: Router) { }

  ngOnInit() {
    this.formConnexion = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    }


    );
  }
  // on passe les infos a poster
  OnConnexion() {
    const user = {
      username: this.formConnexion.value.username,
      password: this.formConnexion.value.password,
    };
    this.auth.getConnexion(user).subscribe(
      data => {
        //console.log(data);
        localStorage.setItem('token', data.token);
        this.route.navigate(['home']);
      }
    );
}
}
