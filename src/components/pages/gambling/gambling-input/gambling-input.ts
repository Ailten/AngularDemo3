import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-gambling-input',
  imports: [],
  templateUrl: './gambling-input.html',
  styleUrl: './gambling-input.css',
})
export class GamblingInput implements OnInit {

  charactersAllow = input.required<string>();
  poolsCount = input<number>(3);

  eventSpinWheel = output<number[]>();

  ngOnInit(): void {
    // remove class anime when anime end.
    document.querySelector('.ball')?.addEventListener('animationend', (evnt) => {
      let ball = evnt.target;
      (ball as HTMLElement).classList.remove('ball-anime');
    });
  }

  launchWheel($event: Event){

    // TODO: verify if user can launch 
    // (if the wheel is not already spinning)
    // (or no more money).

    // generate every pool results (as index).
    let rng: number[] = [];
    for(let i=0; i<this.poolsCount(); i++){
      rng.push(
        // genereate a random index in pool.
        Math.floor(Math.random() * (this.charactersAllow().length / 2))
      );
    }
    
    // send the results to parent component.
    this.eventSpinWheel.emit(rng);

    // launch an animation css.
    ($event.target as HTMLElement)?.classList.add('ball-anime');

  }

}
