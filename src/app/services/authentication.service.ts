import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http';
import {environment } from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get CurrentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get getToken(): String {
    const currentUser = this.CurrentUserValue;
    return currentUser.token;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/portal/user/api/auth/login`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));

    console.log("Towards lgn");
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
