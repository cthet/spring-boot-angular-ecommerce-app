import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'HyphenateCase',
})
export class HyphenPipe implements PipeTransform {
  transform(value: string | undefined): string | undefined {
    if (value != undefined)
      while (value.includes(' ')) {
        value = value.replace(' ', '-');
      }
    return value;
  }
}
