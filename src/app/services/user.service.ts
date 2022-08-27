import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUserBasedOnName(userName: string) {
    return this.http.get<any>(
      `${environment.apiUrl}/api/user/name/${userName}`
    );
    // return this.http.get<any>('../../assets/sampledata/getuser.json');
  }
  getAllUsers() {
    // return this.http.get<any>('../../assets/sampledata/getallusers.json');
    return this.http.get<any>(`${environment.apiUrl}/api/user/getAllUser`);
  }
  deleteUser(userId: any) {
    return this.http.delete<any>(
      `${environment.apiUrl}/api/user/delete-user/${userId}`
    );
  }
}
