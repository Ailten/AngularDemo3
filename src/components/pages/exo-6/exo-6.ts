import { Component, signal } from '@angular/core';
import { ToMinutesPipe } from '../../pipes/to-minutes-pipe';

@Component({
  selector: 'app-exo-6',
  imports: [ToMinutesPipe],
  templateUrl: './exo-6.html',
  styleUrl: './exo-6.css',
})
export class Exo6 {

  secondes = signal(0);

  intervalIndex = signal<number|null>(null);

  start(){
    if(this.intervalIndex() !== null){
      return;
    }

    let indexNewInterval: number = setInterval(() => {
      this.secondes.update((v) => v + 1);
    }, 1000);

    this.intervalIndex.set(indexNewInterval);

  }

  pause(){
    if(this.intervalIndex() === null){
      return;
    }

    clearInterval(this.intervalIndex()!);
  }
  reset(){
    this.secondes.set(0);
  }

}
