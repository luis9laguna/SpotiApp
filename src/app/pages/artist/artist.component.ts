import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiappService } from 'src/app/services/spotiapp.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {

  id: String;
  artist: any;
  tracks: any;

  constructor(private spoti: SpotiappService,
    private router: ActivatedRoute,
    private _location: Location) {

    this.router.params.subscribe(params => {
      this.id = params['id'];
    })

    this.getArtist(this.id);
    this.getTracks(this.id);
  }

  getArtist(id: any) {

    this.spoti.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
      })
  }

  getTracks(id: any) {

    this.spoti.getArtistTrack(id)
      .subscribe(tracks => {
        this.tracks = tracks;
      })
  }

  goBack() {
    this._location.back();
  }

}
