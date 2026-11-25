import { Component, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-exo-4-3',
  imports: [DecimalPipe],
  templateUrl: './exo-4-3.html',
  styleUrl: './exo-4-3.css',
})
export class Exo43 {

  caclulatorNum = signal(0);

  addDigit(num: number){
    this.caclulatorNum.update((v) => (v * 10 % 1e9) + num );  // modulo to stay lower than 9 digit.
  }

}
