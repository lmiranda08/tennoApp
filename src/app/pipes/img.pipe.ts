import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(array: string): string {
    if ( array == '' ){
      return array;
    }else{
      if (array.length < 1 ){
        return array;
      }else{
        const indice = array.indexOf('/revision');
        return array.substring(0, indice);
      }
    }
  }
}