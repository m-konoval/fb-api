import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatFilterService {
  filterSting = null;

  @Output()
    applyCaterory: EventEmitter<string> = new EventEmitter();

  constructor() { }

  choseCategory( catValue ) {
    this.filterSting = catValue;
    this.applyCaterory.emit(this.filterSting);
  }
}
