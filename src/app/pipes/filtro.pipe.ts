import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any,
            text: string,
            column: string): any[] {

    if ( text == '' ){
      return array;
    }
/*     text = text.toLowerCase(); */
    return array.filter (item => {
      return item[column].toLowerCase()
      .includes( text.toLowerCase() );
    });

  }

}
