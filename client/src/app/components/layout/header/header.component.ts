import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuScope, categoriesScope } from './../../shared/navigation';
import { CatFilterService } from 'src/app/services/cat-filter.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public menu;
  public categories;

  constructor(
    private router: Router,
    private catFilter: CatFilterService
  ) { }

  ngOnInit() {
    this.menu = menuScope;
    this.categories = categoriesScope;
  }


  // 1 - follow route
  // 2 - set categoty filter to default
  handleRoute(link) {
    this.navigateTo(link);
    this.filterCategory(null);
  }


  // 1 - go to home page
  // 2 - apply filter by ckicked category
  handleFilter(filter) {
    const homeRoute = '/';

    this.navigateTo(homeRoute);
    setTimeout(
      () => { this.filterCategory(filter); },
    0);
  }


  // Router navigate method
  private navigateTo(link: string): void {
    this.router.navigate([link]);
  }


  // Category filter method
  private filterCategory(filterString: (string | null)) {
    this.catFilter.choseCategory(filterString);
  }
}
