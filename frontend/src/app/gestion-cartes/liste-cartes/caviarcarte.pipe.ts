import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caviarcarte'
})
export class CaviarcartePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }
    const start = value.slice(0, 4);
    const middle = value.slice(4, -2).replace(/\d/g, '* ');
    const end = value.slice(-2);
    return `${start} ${middle.trimEnd()} ${end}`;
  }
}
