import { Component, signal } from '@angular/core';
import { ToMinutesPipe } from '../../pipes/to-minutes-pipe';

@Component({
  selector: 'app-exo-3',
  imports: [ToMinutesPipe],
  templateUrl: './exo-3.html',
  styleUrl: './exo-3.css',
})
export class Exo3 {

  secondes = signal(0);

  intervalIndex: number | undefined = undefined;

  start(){
    if(this.intervalIndex !== undefined){
      return;
    }

    this.intervalIndex = setInterval(() => {
      this.secondes.update((v) => v + 1);
    }, 1000);
  }
  pause(){
    if(this.intervalIndex === undefined){
      return;
    }

    clearInterval(this.intervalIndex);
  }
  reset(){
    this.secondes.set(0);
  }

}
