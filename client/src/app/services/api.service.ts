import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';


// MODELs
import { Post } from '../models/Post';
import { Event } from '../models/Event';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // init Const values
  private header = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  private postURI = '/api/posts';
  private eventURI = '/api/events';


  constructor(private http: HttpClient) { }


  // Send merged response To component
  public getContent(): Observable<(Post | Event)[]> {
    // return Ready response
    return forkJoin(this.reqPosts(), this.reqEvents()).pipe(
      map(([postRes, eventRes]) => {
        return [...postRes, ...eventRes];
      })
    );

  }


  // GET request to Posts API
  private reqPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postURI).pipe(
      map(res => res)
    );
  }


  // GET request to Events API
  private reqEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventURI).pipe(
      map(res => res)
    );
  }

}
