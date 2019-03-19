import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    PipesModule
  ],
  exports: [
    HomeComponent,
    ContactComponent
  ]
})
export class PagesModule { }
