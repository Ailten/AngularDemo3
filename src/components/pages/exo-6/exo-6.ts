import { Component, computed, effect, signal } from '@angular/core';
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

  isAble = computed<boolean>(() => this.intervalIndex() !== null);

  bestScore = signal(0);

  constructor() {

    this.bestScore.set(Number(localStorage.getItem('best-score') ?? '0'));

    effect(() => {
      let lastBestScore = this.bestScore();
      if(this.secondes() > lastBestScore){
        localStorage.setItem('best-score', this.secondes().toString());
        this.bestScore.set(this.secondes());
      }
    });
  }

  start(){
    if(this.isAble()){
      return;
    }

    let indexNewInterval: number = setInterval(() => {
      this.secondes.update((v) => v + 1);
    }, 1000);

    this.intervalIndex.set(indexNewInterval);

  }

  pause(){
    if(!this.isAble()){
      return;
    }

    this.cleanIntervalTime();
  }
  reset(){
    if(this.isAble()){
      this.cleanIntervalTime();
    }

    this.secondes.set(0);

    // reset best score stock (in signal and localStorage).
    localStorage.removeItem('best-score');
    this.bestScore.set(0);
  }

  cleanIntervalTime(){
    clearInterval(this.intervalIndex()!);
    this.intervalIndex.set(null);
  }

}
