import { Injectable } from '@angular/core';
import { HttpService } from '../http_service/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}

  signUp(payload: any) {
    return this.http.postApi('bookstore_user/registration', payload);
  }

  login(payload: any) {
    return this.http.postApi('bookstore_user/login', payload);
  }
}
