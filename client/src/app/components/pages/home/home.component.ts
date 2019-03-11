import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  posts: any[];

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getPosts().subscribe(posts => {
      this.posts = posts;

      console.log(this.posts);
    });

  }

}
