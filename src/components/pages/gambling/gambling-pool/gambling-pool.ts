import { Component, computed, effect, input, model, untracked } from '@angular/core';

@Component({
  selector: 'app-gambling-pool',
  imports: [],
  templateUrl: './gambling-pool.html',
  styleUrl: './gambling-pool.css',
})
export class GamblingPool {

  charactersWheel = input.required<string>();
  resultPool = input.required<number>();
  isSpinning = model<boolean>(false);

  // amount of seconde this wheel spin.
  spinningTime = input<number>(2.0);

  // attribute data-index-wheel.
  dataIndexWheel = input.required<number>();

  // position wheel after spin (css translate Y).
  positionWheel = computed<number>(() => this.resultPool() * 100 * -1 );

  // characters on a wheel (printable).
  charactersWheelAscii = computed<string[]>(() => {
    const segmenter = new Intl.Segmenter('fr', {
      granularity: 'grapheme'
    });
    return [...segmenter.segment(this.charactersWheel())]
      .map(segment => segment.segment);
  });

  constructor(){

    effect(() => {

      // if it spin, launch the futur end spin.
      if(this.isSpinning()){

        let wheelHtml = this.getWheelHtml();
        if(wheelHtml === null)
          return;
        let innerWheel = (wheelHtml as HTMLElement).firstChild;
        (innerWheel as HTMLElement).style.transform = ``;
        
        setTimeout(() => {
          this.isSpinning.set(false);  // recursive call effect.

          let wheelHtml = this.getWheelHtml();
          if(wheelHtml === null)
            return;
          let innerWheel = (wheelHtml as HTMLElement).firstChild;
          (innerWheel as HTMLElement).style.transform = `translateY(${(this.positionWheel())}px)`;

        }, this.spinningTime() * 1000);

      }

    });

  }

  getWheelHtml() : HTMLElement | null{
    return document.querySelector(`.gambling-bool[data-index-wheel="${this.dataIndexWheel()}"]`)!;
  }

}
