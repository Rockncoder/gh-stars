import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {GitHubService} from './git-hub.service';
import 'hammerjs';
import {ResultsListComponent} from './results-list/results-list.component';
import 'moment';
import {MomentModule} from 'angular2-moment';
import {ByterPipe} from './byter/byter.pipe';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';



@NgModule({
  declarations: [
    AppComponent,
    ResultsListComponent,
    ByterPipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MomentModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
