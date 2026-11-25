import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onOff',
})
export class OnOffPipe implements PipeTransform {
  transform(value: boolean, ...args: string[]): string {
    if(args.length == 2)
      return (value? args[0]: args[1]);

    return (value? 'On': 'Off');
  }
}
