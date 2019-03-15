import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, merge } from 'rxjs';


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

  private getPosts() {
    return this.http.get(this.postURI);
  }

  private getEvents() {
    return this.http.get(this.eventURI);
  }


  public getAll(): Observable<any> {
    const postRes = this.getPosts();
    const eventsRes = this.getEvents();

    return merge(postRes, eventsRes);
  }


}
