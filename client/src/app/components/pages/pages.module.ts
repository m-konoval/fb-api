import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    ContactComponent
  ]
})
export class PagesModule { }
