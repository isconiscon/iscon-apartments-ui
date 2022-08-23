import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _userInformation = new BehaviorSubject<any>({});
  userInfo$ = this._userInformation.asObservable();

  private _userRole = new BehaviorSubject<any>('');
  userRole$ = this._userRole.asObservable();
  constructor() {}
  setLoginUserInformation(userInfo: any) {
    this._userInformation.next(userInfo);
  }
  getLoginUserInformation() {
    return this._userInformation;
  }
  setUserRole(role: string) {
    this._userRole.next(role);
  }
  getUserRole() {
    return this.userRole$;
  }
}
