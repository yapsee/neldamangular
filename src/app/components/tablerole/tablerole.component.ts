import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-tablerole',
  templateUrl: './tablerole.component.html',
  styleUrls: ['./tablerole.component.scss']
})
export class TableroleComponent implements OnInit {
  roles;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() { }

   OnRoles() {
    this.auth.getLibelle().subscribe(
      data => {
        this.roles = data ['hydra:member'];
        console.log(data['hydra:member']
        ); },
        error => {
          alert('Veuiller vous connecter');
          console.log(error);
        }
    );

  }
}

