import { SharedService } from './../services/shared.service';
import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ObservedValuesFromArray } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private _currentRole: BehaviorSubject<any>;
  public currentRole$: Observable<any>;

  isLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      localStorage.getItem('currentUser') || ''
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/login`, { username, password })
      .pipe(
        map((user) => {
          this.isLoggedIn = true;
          localStorage.setItem('auth_token', user.token);
          user.authdata = window.btoa(username + ':' + password);
          this.currentUserSubject.next(user);
          this.userService
            .getUserBasedOnName(username)
            .subscribe((userdata: any) => {
              localStorage.setItem('currentUserRole', userdata.role);
              localStorage.setItem(
                'currentUser',
                JSON.stringify(userdata.userName)
              );
              this.sharedService.setUserRole(userdata.role);
              this.sharedService.setLoginUserInformation(userdata);
            });

          return user;
        })
      );
  }
  logout(): void {
    console.log('Logout called');
    this.isLoggedIn = false;
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserRole');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('auth_token');
    this.currentUserSubject.next(null);
  }
  getAuthToken(): string {
    return localStorage.getItem('auth_token') || '';
  }
}
