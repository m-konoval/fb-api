import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFilterPipe } from './cat-filter.pipe';

@NgModule({
  declarations: [
    CatFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatFilterPipe
  ]
})
export class PipesModule {
  static forRoot() {
    return {
        ngModule: PipesModule,
        providers: [],
    };
 }
}
