import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
    // console.warn(data.name);
  }
}
