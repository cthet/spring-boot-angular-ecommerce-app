import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BrandCase',
})
export class BrandPipe implements PipeTransform {
  
  transform(value: string): string {
    return `marques/${value}`;
  }
}
