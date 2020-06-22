import { User } from './../../models/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router: Router, private auth: AuthentificationService) 
  {}

  ngOnInit() {
  }
   Onlogout() {
        this.auth.logout();
        this.router.navigate(['/login']);
    }

}
