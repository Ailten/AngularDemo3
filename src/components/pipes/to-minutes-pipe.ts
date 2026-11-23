import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinutes',
})
export class ToMinutesPipe implements PipeTransform {
  transform(value: number): string {

    let minutes = Math.floor(value / 60)
    let secondes = value % 60;

    let minutesStr = (minutes < 10? '0': '') + minutes;
    let secondesStr = (secondes < 10? '0': '') + secondes;

    return `${minutesStr} minutes ${secondesStr} secondes`;
    
  }
}
