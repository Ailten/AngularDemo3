import { Component, input, model, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-gambling-input',
  imports: [],
  templateUrl: './gambling-input.html',
  styleUrl: './gambling-input.css',
})
export class GamblingInput implements OnInit{

  eventSpinWheel = output();

  isWheelSpinning = model.required<boolean>();

  ngOnInit(): void {
    // remove class anime when anime end.
    document.querySelector('.ball')?.addEventListener('animationend', (evnt) => {
      let ball = evnt.target;
      (ball as HTMLElement).classList.remove('ball-anime');
    });
  }

  launchWheel($event: Event){

    // do not allow to use spin input when already spinning.
    if(this.isWheelSpinning())
      return;
    this.isWheelSpinning.set(true);

    // send the results to parent component.
    this.eventSpinWheel.emit();

    // launch an animation css.
    ($event.target as HTMLElement)?.classList.add('ball-anime');

  }

}
