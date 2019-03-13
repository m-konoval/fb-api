import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { all } from 'q';


const header = new HttpHeaders({
  'Content-Type': 'application/json'
});



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private postURI = '/api/posts';
  private eventURI = '/api/events';


  constructor(private http: HttpClient) { }

  public getPosts(): Observable<any> {
    return this.http.get(this.postURI);
  }

  public getEvents(): Observable<any> {
    return this.http.get(this.eventURI);
  }
}
