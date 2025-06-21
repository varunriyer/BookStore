import { Injectable } from '@angular/core';
import { HttpService } from '../http_service/http.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpService) {}

  getAllBooks() {
    return this.http.getApi('bookstore_user/get/book');
  }
}
