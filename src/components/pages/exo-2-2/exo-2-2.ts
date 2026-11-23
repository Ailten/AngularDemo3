import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exo-2-2',
  imports: [],
  templateUrl: './exo-2-2.html',
  styleUrl: './exo-2-2.css',
})
export class Exo22 {

  isRed = signal(false);
  isBold = signal(false);

}
