import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { ImagePipe } from './pipes/image.pipe';
import { UrlPipe } from './pipes/url.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { SongComponent } from './pages/song/song.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    CardsComponent,
    ArtistComponent,
    SongComponent,
    ImagePipe,
    UrlPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
