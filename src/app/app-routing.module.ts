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
import { UsercreateComponent } from './components/usercreate/usercreate.component';
import { AccountcreateComponent } from './components/accountcreate/accountcreate.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { TransfertComponent } from './components/transfert/transfert.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { RetraitComponent } from './components/retrait/retrait.component';
import { PartsComponent } from './components/parts/parts.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

const routes: Routes = [
{path: 'login', component: ConnexionComponent},
{path: '', component: ConnexionComponent},
{path: 'home', component: CardsComponent, canActivate: [AuthGuard]},
{path: 'add-user', component: AdduserComponent, canActivate: [AuthGuard]},
{path: 'add-role', component: AddroleComponent, canActivate: [AuthGuard]},
{path: 'table-role', component: TableroleComponent, canActivate: [AuthGuard]},
{path: 'table-users', component: UserslistComponent, canActivate: [AuthGuard]},
{path: 'table-accounts', component: TableAccountsComponent, canActivate: [AuthGuard]},
{path: 'table-deposits', component: TableDepositsComponent, canActivate: [AuthGuard]},
{path: 'usercreate', component: UsercreateComponent, canActivate: [AuthGuard]},
{path: 'accountcreate', component: AccountcreateComponent, canActivate: [AuthGuard]},
{path: 'depot', component: DepositComponent, canActivate: [AuthGuard]},
{path: 'send', component: TransfertComponent, canActivate: [AuthGuard]},
{path: 'affect', component: AffectationComponent, canActivate: [AuthGuard]},
{path: 'retrait', component: RetraitComponent, canActivate: [AuthGuard]},
{path: 'parts', component: PartsComponent, canActivate: [AuthGuard]},
{path: 'systeme', component: HomeComponent, canActivate: [AuthGuard],
    data: {
      expectedRole: 'ROLE_ADMINSYS' } },
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
