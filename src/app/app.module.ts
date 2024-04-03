import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartComponent } from './nebulaChart/chart.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ChartComponent },
    ])
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
