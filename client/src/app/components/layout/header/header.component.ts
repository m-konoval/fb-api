import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuScope, categoriesScope } from './../../shared/navigation';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public menu;
  public categories;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menu = menuScope;
    this.categories = categoriesScope;
  }

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }

}
