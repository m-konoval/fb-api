import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const header = new HttpHeaders({
  'Content-Type': 'application/json'
});



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URI = '/api/posts';


  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.URI);
  }


}
