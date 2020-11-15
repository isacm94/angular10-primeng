import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl = '/api/books/';

  params = new HttpParams();

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
