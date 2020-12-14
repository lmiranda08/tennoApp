import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaces'
})
export class SpacesPipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.replace(' ', '') : value;
  }

}
