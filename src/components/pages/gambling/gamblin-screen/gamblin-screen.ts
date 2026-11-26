import { Component, effect, input, output, signal } from '@angular/core';
import { GamblingPool } from '../gambling-pool/gambling-pool';

@Component({
  selector: 'app-gamblin-screen',
  imports: [GamblingPool],  //GamblingPool
  templateUrl: './gamblin-screen.html',
  styleUrl: './gamblin-screen.css',
})
export class GamblinScreen {

  readonly timeFullSpin = signal(2.0);

  charactersWheel = input.required<string[]>();
  poolsResults = input.required<number[]>();
  lengthWheel = input.required<number>();

  // list of boolean, to know if eatch wheel is spinning.
  isSpinning = signal([signal(false), signal(false), signal(false)]);

  // call when all wheel end spining.
  wheelEndSpinning = output();

  constructor() {

    // execute when poolsResults change.
    effect(() => {

      // do not spin for the assignation input.
      if(this.poolsResults().includes(-1))
        return;

      console.log(`every wheel START spinning.`);

      // refill full of true.
      this.isSpinning().forEach((v) => v.set(true));
        
      // call when spin is end.
      setTimeout(() => {
        this.wheelEndSpinning.emit();
      }, this.timeFullSpin() * 1000);

    });
  }

}
