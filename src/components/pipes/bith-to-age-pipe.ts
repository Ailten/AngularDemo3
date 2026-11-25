import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bithToAge',
})
export class BithToAgePipe implements PipeTransform {
  transform(value: Date | string): number {

    let birthDate: Date = (typeof value == typeof ''?
      new Date(value):
      value as Date
    );

    const milisecInAYear = 1000*60*60*24*365;
    let ageInMiliSec = Date.now() - birthDate.getTime();
    let age = Math.floor(ageInMiliSec / milisecInAYear);

    return age;

  }
}
