import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    DepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ReactiveFormsModule
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
