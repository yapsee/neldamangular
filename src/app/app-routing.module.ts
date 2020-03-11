import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { TableroleComponent } from './components/tablerole/tablerole.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddroleComponent } from './components/addrole/addrole.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { TableAccountsComponent } from './components/table-accounts/table-accounts.component';
import { TableDepositsComponent } from './components/table-deposits/table-deposits.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [{path: 'login', component: ConnexionComponent},
{path: '', component: CardsComponent },
{path: 'home', component: CardsComponent },
{path: 'add-user', component: AdduserComponent},
{path: 'add-role', component: AddroleComponent},
{path: 'table-role', component: TableroleComponent},
{path: 'table-users', component: UserslistComponent},
{path: 'table-accounts', component: TableAccountsComponent},
{path: 'table-deposits', component: TableDepositsComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
