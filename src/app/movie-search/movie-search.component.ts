import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model.client';
import { OmdbMovieServiceClient } from '../../services/movie.service.client';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private service: OmdbMovieServiceClient) { }

  movie = {}
  movies: Movie[]
  keyword = ''
  search = (title) =>
    this.service
      .findMoviesByKeyword(title)
      .then(response => this.movies = response.Search)

  details = imdbId =>
    this.service
      .findMovieByImdbId(imdbId)
      .then(movie => this.movie = movie)

  likes = movie =>
    this.service
      .likes(movie)


  ngOnInit() {
  }

}
