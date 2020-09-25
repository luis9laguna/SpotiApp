import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  tracks: any[];
  artists: any[];

  constructor(private spoti: SpotiappService,
    private router: ActivatedRoute) {

    this.router.params.subscribe(params => {
      let term = params['term'];
      this.searchTracks(term);
      this.searchArtist(term);
    })

  }
  searchTracks(term: string) {
    this.spoti.getSearchTrack(term)
      .subscribe(data => {
        this.tracks = data;

      })
  }

  searchArtist(term: string) {
    this.spoti.getSearchArtist(term)
      .subscribe(data => {
        this.artists = data;
      })
  }

}
