import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { HomeComponent } from './pages/home/home.component';
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
import { FooterComponent } from './components/footer/footer.component';
import { AffectationComponent } from './components/affectation/affectation.component';
import { RetraitComponent } from './components/retrait/retrait.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; // filtre de recherche sur une table
import { PartsComponent } from './components/parts/parts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    HomeComponent,
    TableroleComponent,
    NavbarComponent,
    AdduserComponent,
    AddroleComponent,
    UserslistComponent,
    TableAccountsComponent,
    TableDepositsComponent,
    CardsComponent,
    UsercreateComponent,
    AccountcreateComponent,
    DepositComponent,
    TransfertComponent,
    FooterComponent,
    AffectationComponent,
    RetraitComponent,
    PartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
   Ng2SearchPipeModule, // filter pour tables
   BrowserAnimationsModule,
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } // pour le login check
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
