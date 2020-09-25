import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ArtistComponent } from './pages/artist/artist.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { SongComponent } from './pages/song/song.component';


const routes: Routes = [

  {path:'', component: HomeComponent},
  {path: 'search/:term', component: SearchComponent },
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'song/:id', component: SongComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
