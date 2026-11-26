import { Component, computed, signal } from '@angular/core';
import { GamblingInput } from './gambling-input/gambling-input';
import { GamblinScreen } from './gamblin-screen/gamblin-screen';

@Component({
  selector: 'app-gambling',
  imports: [GamblingInput, GamblinScreen],
  templateUrl: './gambling.html',
  styleUrl: './gambling.css',
})
export class Gambling {

  // characters used for wheel.
  charactersWheel = signal<string[]>([
    '🍒🍋🍇🍒🔔🍉🍋⭐🍒🍇💎🍋🍉🍒🔔🍇🍋7️⃣🍒🍉',  // wheel 1.
    '🍋🍒🔔🍇🍉⭐🍋🍒💎🍇🍒7️⃣🍉🍋🔔🍒🍇⭐🍋🍉',  // wheel 2.
    '🍇🍉🍒🍋⭐🔔🍇🍒🍉💎🍋🍒7️⃣🍇🔔🍉🍋🍒⭐🍇'   // wheel 3.
  ]);
  // array of every gain can be score.
  charactersGains = [
    {char: '🍒', gain: 2},
    {char: '🍋', gain: 3},
    {char: '🍉', gain: 4},
    {char: '🍇', gain: 5},
    {char: '🔔', gain: 8},
    {char: '⭐', gain: 12},
    {char: '💎', gain: 25},
    {char: '7️⃣', gain: 50},
  ];
  // how many character on a single wheel.
  lengthWheel = computed<number>(() => this.getLengthAsciiEmoji(this.charactersWheel()[0]) );

  // position of wheel after spinning.
  poolsResults = signal<number[]>([-1, -1, -1]);
  // is wheel still spinning.
  isWheelSpinning = signal(false);

  // function call when user use the input "gambling".
  eventUserSpinWheel(){

    // generate random wheel result.
    let rngs = Array.apply(null, Array(3))  // generate an array length 3.
      .map((_) => {
        return Math.floor(Math.random() * this.lengthWheel());  // generate a random wheel position.
      });

    console.log(`rng : ${rngs}`);
    console.log(`--- : ${rngs.map((n, i) => this.getAsciiEmoji(
      this.charactersWheel()[i], n
    ))}`);
    console.log(`--- : ${rngs.map((n, i) => this.getAsciiEmoji(
      this.charactersWheel()[i], (n+1) % this.lengthWheel()
    ))}`);
    console.log(`--- : ${rngs.map((n, i) => this.getAsciiEmoji(
      this.charactersWheel()[i], (n+2) % this.lengthWheel()
    ))}`);

    // set to signal.
    this.poolsResults.set(rngs);
  }

  // event when all whell stop spinning.
  wheelEndSpinning(){
    console.log('every wheel END spinning.');

    this.isWheelSpinning.set(false);
  }

  getAsciiEmoji(str: string, index: number = 0){
    const segmenter = new Intl.Segmenter('fr', {
      granularity: 'grapheme'
    });
    return [...segmenter.segment(str)].map(segment => segment.segment)[index];
  }
  getLengthAsciiEmoji(str: string){
    const segmenter = new Intl.Segmenter('fr', {
      granularity: 'grapheme'
    });
    return [...segmenter.segment(str)].length;
  }

}
