import { Component, computed, effect, input, signal } from '@angular/core';
import { GamblingPool } from '../gambling-pool/gambling-pool';

@Component({
  selector: 'app-gamblin-screen',
  imports: [GamblingPool],  //GamblingPool
  templateUrl: './gamblin-screen.html',
  styleUrl: './gamblin-screen.css',
})
export class GamblinScreen {

  charactersAllow = input.required<string>();
  poolsCount = input<number>(3);

  // get the result of a spining wheel.
  poolsResults = input.required<number[]|null>()
  poolsResultsNN = computed<number[]>(() => {  // remap poolsResults as not null.
    return this.poolsResults() ?? 
      Array.from({ length: this.poolsCount() }, (_, i) => 0);
  });

  isSpinning = signal<boolean[]>(new Array(this.poolsCount()).map((_, i) => false));

  constructor() {

    // execute when poolsResults change.
    effect(() => {
      this.poolsResults()?.forEach((result, i) => {

        // refill full of true.
        this.isSpinning.set(
          Array.apply(null, Array(this.poolsResults()!.length)).map((_) => true)
        );

        console.log(`pool [${i}] START spining`);

        const timeSpin = 2.0;
        setTimeout(() => {

          console.log(`pool [${i}] END spining`)

          this.isSpinning.update((v) => 
            v.map((vcel, j) => (j===i? false: vcel))
          );

          let pool = document.querySelector(`app-gambling-pool[data-id-pool="${i}"] > div > div`);
          (pool as HTMLElement)!.style.transform = `translateY(${(this.poolsResultsNN()[i] * 100 * -1)}px)`;
          
        }, timeSpin * 1000 * ((i+1) / this.poolsResults()!.length));

      });
    });
  }
  

}
