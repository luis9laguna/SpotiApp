import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {

  public id: string;
  public track: any;

  constructor(private spoti: SpotiappService,
    private router: ActivatedRoute) {

    this.router.params.subscribe(params => {
      this.id = params.id;
    });
    this.getTrack(this.id);
  }

  getTrack(id: string) {
    this.spoti.getTrack(id)
      .subscribe(data => {
        this.track = data;
        console.log(data);
      });
  }

}
