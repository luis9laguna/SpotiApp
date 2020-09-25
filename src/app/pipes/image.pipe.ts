import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(song: any): string {

    if(song.type == "track"){
      if( !song.album.images){
        return 'assets/img/noimage.png';
      }
  
      if(song.album.images.length > 0){
        return song.album.images[0].url;
      }else{
        return 'assets/img/noimage.png';
      }
      
    }else{
      if( !song.images){
        return 'assets/img/noimage.png';
      }
  
      if(song.images.length > 0){
        return song.images[0].url;
      }else{
        return 'assets/img/noimage.png';
      }

    }


  }

}
