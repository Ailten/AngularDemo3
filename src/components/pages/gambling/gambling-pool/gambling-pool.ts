import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-gambling-pool',
  imports: [],
  templateUrl: './gambling-pool.html',
  styleUrl: './gambling-pool.css',
})
export class GamblingPool {

  charactersAllow = input.required<string>();

  isSpinning = input.required<boolean>();

  constructor(){
  }

}
