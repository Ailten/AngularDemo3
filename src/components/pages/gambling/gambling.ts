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
  charactersGains = signal([
    {char: '🍒', gain: 2},
    {char: '🍋', gain: 3},
    {char: '🍉', gain: 4},
    {char: '🍇', gain: 5},
    {char: '🔔', gain: 8},
    {char: '⭐', gain: 12},
    {char: '💎', gain: 25},
    {char: '7️⃣', gain: 50},
  ]);
  // how many character on a single wheel.
  lengthWheel = computed<number>(() => this.getLengthAsciiEmoji(this.charactersWheel()[0]) );

  // position of wheel after spinning.
  poolsResults = signal<number[]>([-1, -1, -1]);
  // is wheel still spinning.
  isWheelSpinning = signal(false);

  // function call when user use the input "gambling".
  eventUserSpinWheel(){

    // check if user has money.
    if(this.money() <= 0){
      alert('no more money');
      return;
    }
    this.money.update((v) => v - 1);

    // generate random wheel result.
    let rngs = Array.apply(null, Array(3))  // generate an array length 3.
      .map((_) => {
        return Math.floor(Math.random() * this.lengthWheel());  // generate a random wheel position.
      });

    // debug a line.
    //rngs = [9,18,8];
    // debug a diago.
    //rngs = [0,0,0];
    // debug second diago.
    //rngs = [18,0,2];

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

    // verify if pull is scoring.
    this.verifyScoring()
      .then(() => {

        // when verify scoring is end, re-allow to execute another spin.
        this.isWheelSpinning.set(false);

      });
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

  // ------------> Scoring.

  money = signal(100)

  async verifyScoring(){
    let isScoring = false;

    // check lines.
    [0, 1, 2].forEach((i) => {

      // get a list of all char from a line.
      let charPools = this.poolsResults()
        .map((v, j) => {
          return this.getAsciiEmoji(
            this.charactersWheel()[j], 
            (v + i) % this.lengthWheel()
          );
        });

      // check if the line is same char.
      if(this.isSameChar(charPools)){

        this.poolsResults().forEach((v, j) => {

          let domChar = document.querySelector(`.gambling-bool[data-index-wheel="${j}"] .gambling-character[data-char-index="${(v + i)}"]`);
          (domChar as HTMLElement).classList.add('high-light');

          // increase money.
          let scoreFind = this.charactersGains().find((scoreRef) => {
            return this.getAsciiEmoji(scoreRef.char, 0) === charPools[0];
          })
          if(scoreFind != undefined){
            this.money.update((v) => v + scoreFind.gain);
          }
          
          isScoring = true;

        });

      }

    });

    // check diagonal.
    let charUpLeft = this.getAsciiEmoji(this.charactersWheel()[0], this.poolsResults()[0]);
    let charBotLeft = this.getAsciiEmoji(this.charactersWheel()[0], (this.poolsResults()[0] + 2) % this.lengthWheel());
    let charCenter = this.getAsciiEmoji(this.charactersWheel()[1], (this.poolsResults()[1] + 1) % this.lengthWheel());
    if(
      charUpLeft === charCenter &&
      charUpLeft === this.getAsciiEmoji(this.charactersWheel()[2], (this.poolsResults()[2] + 2) % this.lengthWheel())
    ){

      // set anime css.
      Array.prototype.forEach.call(
        document.querySelectorAll(
          `.gambling-bool[data-index-wheel="0"] .gambling-character[data-char-index="${(this.poolsResults()[0])}"], `+
          `.gambling-bool[data-index-wheel="1"] .gambling-character[data-char-index="${(this.poolsResults()[1] + 1)}"], `+
          `.gambling-bool[data-index-wheel="2"] .gambling-character[data-char-index="${(this.poolsResults()[2] + 2)}"]`
        ),
        domChar => {
          (domChar as HTMLElement).classList.add('high-light');
        }
      );

      // increase money.
      let scoreFind = this.charactersGains().find((scoreRef) => {
        return this.getAsciiEmoji(scoreRef.char, 0) === charUpLeft;
      })
      if(scoreFind != undefined){
        this.money.update((v) => v + scoreFind.gain);
      }
          
      isScoring = true;
    }

    if(
      charBotLeft === charCenter &&
      charBotLeft === this.getAsciiEmoji(this.charactersWheel()[2], this.poolsResults()[2])
    ){

      // set anime css.
      Array.prototype.forEach.call(
        document.querySelectorAll(
          `.gambling-bool[data-index-wheel="0"] .gambling-character[data-char-index="${(this.poolsResults()[0] + 2)}"], `+
          `.gambling-bool[data-index-wheel="1"] .gambling-character[data-char-index="${(this.poolsResults()[1] + 1)}"], `+
          `.gambling-bool[data-index-wheel="2"] .gambling-character[data-char-index="${(this.poolsResults()[2])}"]`
        ),
        domChar => {
          (domChar as HTMLElement).classList.add('high-light');
        }
      );

      // increase money.
      let scoreFind = this.charactersGains().find((scoreRef) => {
        return this.getAsciiEmoji(scoreRef.char, 0) === charUpLeft;
      })
      if(scoreFind != undefined){
        this.money.update((v) => v + scoreFind.gain);
      }
          
      isScoring = true;
    }

    // if find a score, wait end anime to allow new spin.
    if(isScoring){

      // force wait.
      await new Promise((resolve) => {
        setTimeout(() => {

          // remove every 'high-light' class.
          Array.prototype.forEach.call(
            document.getElementsByClassName('gambling-character'),
            charDom => {
              if((charDom as HTMLElement).classList.contains('high-light'))
                (charDom as HTMLElement).classList.remove('high-light');
            }
          );

          resolve(null);
        }, 0.4 * 1000);
      });

    }

  }

  isSameChar(arr: string[]): boolean{

    if(arr.length <= 1)
      return true;
    let firstStr = arr[0];
    for(let i=1; i<arr.length; i++){
      if(arr[i] != firstStr)
        return false;
    }
    return true;
  }

}
