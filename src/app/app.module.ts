import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OmdbMovieServiceClient} from "../services/movie.service.client";
import { MovieSearchComponent } from './movie-search/movie-search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    OmdbMovieServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
