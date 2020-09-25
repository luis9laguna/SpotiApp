import { Component } from '@angular/core';
import { SpotiappService } from '../../services/spotiapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newSongs: any[];

  constructor( private spoti: SpotiappService ) {
    this.spoti.getNewReleases()
    .subscribe(data =>{
      this.newSongs = data;
    })
  }

}
