import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatFilterService {

  constructor() { }

  choseCategory( articles, creteria ) {
    const allArticles = articles;

    allArticles.filter(item => {
      if ( item.type === creteria ) {
        return item;
      }
    });

  }
}
