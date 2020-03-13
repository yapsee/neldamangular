import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from './../models/role';
import { BankAccount } from './../models/bank-account';
import { Depot } from './../models/depot';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

    private currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {
         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    // fonction pour poster les infos du user

  getConnexion(user: User) {

    return this.httpClient.post<User>(`${environment.apiUrl}/login_check`, user).

    pipe(map(user => {
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
}

