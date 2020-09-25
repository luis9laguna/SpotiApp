import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotiappService {
  constructor(private http: HttpClient) { 
  }

  getQuery( query: string ){
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer token'
      });

      return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe( map( data => data['albums'].items)); 
  }

  getArtist( id: string ){
    return this.getQuery(`artists/${ id }`);
  }
  
  getArtistTrack( id: string ){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( data => data['tracks']));
  }

  getSearchArtist( term: string ){
    return this.getQuery(`search?q=${ term }&type=artist&limit=4`)
    .pipe( map( data => data['artists'].items));  
  }

  getSearchTrack( term: string ){

    return this.getQuery(`search?q=${ term }&type=track&limit=8`)
    .pipe( map( data => data['tracks'].items));
  }

  getTrack( id: string ){
    return this.getQuery(`albums/${id}`);
  }
  

}
