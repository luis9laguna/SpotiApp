import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(song: any): string {
    if(song.type == "artist"){
      return `/artist/${song.id}`;
    }else{
      return `/song/${song.id}`;
    }
  }

}
