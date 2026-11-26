import { Component, signal } from '@angular/core';
import { GamblingInput } from './gambling-input/gambling-input';
import { GamblinScreen } from './gamblin-screen/gamblin-screen';

@Component({
  selector: 'app-gambling',
  imports: [GamblingInput, GamblinScreen],
  templateUrl: './gambling.html',
  styleUrl: './gambling.css',
})
export class Gambling {

  charactersAllow = signal('🍎🍏🪙🍌🍓💎🍍🍒💰');

  poolsResults = signal<number[]|null>(null);

  eventUserSpinWheel(rngs: number[]){
    console.log(rngs);

    this.poolsResults.set(rngs);
  }

}
