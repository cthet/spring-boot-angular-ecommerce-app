import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ApparelCategoryCase',
})
export class ApparelCategoryPipe implements PipeTransform {
  
  transform(value: string): string {
    return `pret-a-porter/${value}`;
  }
}
