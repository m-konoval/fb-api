import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  pageContent: any[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAll().subscribe(res => {
      // res.map(category => {
      //   category.map(item => {
      //     this.pageContent.push(item);
      //   });

      // });

      this.pageContent = res;

      console.log(this.pageContent);
    });
  }

}
