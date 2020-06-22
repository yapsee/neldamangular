import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from './../models/role';
import { BankAccount } from './../models/bank-account';
import { Depot } from './../models/depot';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { Transactions } from '../models/transactions';
import { Affectation } from '../models/affectation';






@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>; // called for my logout
  sanitizer: any;
 constructor(private httpClient: HttpClient, sanitizer: DomSanitizer) {
   // recuperation du token
         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    // fonction pour poster les infos du user // coonexion

  getConnexion(user: User) {

    return this.httpClient.post<User>(`${environment.apiUrl}/login_check`, user).

    pipe(map(user => {
                // stocker le token du current user en local
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));


  }
  // recuperation roles
   getLibelle() {
    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);

  }
   // post User
    postUser(user: User) {
    return this.httpClient.post<User>(`${environment.apiUrl}/api/users`, user);
    }
    // recuperation des users
    getUsers() {
    return this.httpClient.get<User>(`${environment.apiUrl}/api/users`);
    }
     // Blocage et changement de statut d'un user 
    blockUser(id: number) {
    return this.httpClient.get<User>(`${environment.apiUrl}/api/users/block/${id}`);
    }
     // recuperation des comptes
    getAccounts() {
    return this.httpClient.get<BankAccount>(`${environment.apiUrl}/api/bank_accounts`);
    }
     // recuperation des depots
    getDepots() {
    return this.httpClient.get<Depot>(`${environment.apiUrl}/api/depots`);
    }
    // post compte pour un partenaire nouveau
    postBank(bank: BankAccount) {
    return this.httpClient.post<BankAccount>(`${environment.apiUrl}/api/bank_accounts`, bank);
    }
    // Affecter un compte a' un user partenaire
    Affecter(affect: Affectation) {
    return this.httpClient.post<Affectation>(`${environment.apiUrl}/api/affectations`, affect);
    }
    // post depot sur un compte
     postDepot(depot: Depot) {
    return this.httpClient.post<Depot>(`${environment.apiUrl}/api/depots`, depot);
    }
    // recuperation image
    getImage(user: User) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,{$user.image}`
    );
    }
    // recherche ninea
       searchNinea(ninea) {
    return this.httpClient.get<BankAccount>(`${environment.apiUrl}/api/bank_accounts?partenaire.ninea=${ninea}`);
    }
    // post transactions pour faire un envoi
     postEnvoi(envoi: Transactions) {
    return this.httpClient.post<Transactions>(`${environment.apiUrl}/api/transactions`, envoi);
    }
      // recherche code pour savoir si y'a un envoi
       searchCode(code) {
    return this.httpClient.get<Transactions>(`${environment.apiUrl}/api/transactions?code=${code}`);
    }
    // put transactions pour faire un envoi
     faireRetrait(retrait) {
    return this.httpClient.put<Transactions>(`${environment.apiUrl}/api/transactions/${retrait.id}` , retrait);
    }
     // get transactions
     getTrans() {
    return this.httpClient.get<Transactions>(`${environment.apiUrl}/api/transactions`);
    }
    // deconnexion
        logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}

