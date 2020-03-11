import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';


@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.scss']
})
export class AddroleComponent implements OnInit {


  constructor(private auth: AuthentificationService) { }

  ngOnInit() { }
}
