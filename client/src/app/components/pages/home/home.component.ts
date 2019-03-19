import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


import { Post } from '../../../models/Post';
import { Event } from '../../../models/Event';
import { CatFilterService } from 'src/app/services/cat-filter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  pageContent: (Post | Event)[];
  isLoading = true;
  filterQuery = '';


  constructor(
    private api: ApiService,
    private catFilter: CatFilterService
  ) { }


  ngOnInit() {

    // get page content from API
    this.api.getContent().subscribe(res => {
      this.pageContent = res;
      this.isLoading = false;
    });

    // subscribe to categoty filter action
    this.catFilter.applyCaterory.subscribe(cat => {
      this.filterQuery = cat != null ? cat : '';
    });
  }

}
