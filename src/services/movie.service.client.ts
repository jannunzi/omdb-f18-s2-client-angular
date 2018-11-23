import {Injectable} from "@angular/core";

@Injectable()
export class OmdbMovieServiceClient {
  url = 'http://omdbapi.com?apikey=4a249f8d&'
  localhost = 'http://localhost:3000/api/'

  likes = movie =>
    fetch(this.localhost + 'likes', {
      body: JSON.stringify(movie),
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })

  findMoviesByKeyword = keyword => {
    return fetch(this.url + 's=' + keyword)
      .then(res => res.json());
  }

  findMovieByImdbId = imdbId =>
    fetch(this.url + 'i=' + imdbId)
      .then(res => res.json())
}
