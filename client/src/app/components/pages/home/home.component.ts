import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  posts: any[];
  trainings: any[];
  allArt: any[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPosts().subscribe( p => {
      this.posts = p;

      console.log(this.posts);
    });

    this.api.getEvents().subscribe( ev => {
      this.trainings = ev;
      console.log(this.trainings);

    });
  }

}
