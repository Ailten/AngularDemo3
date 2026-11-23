import { Component } from '@angular/core';
import { Nav } from '../../nav/nav';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-1',
  imports: [Nav, FormsModule],
  templateUrl: './exo-1.html',
  styleUrl: './exo-1.css',
})
export class Exo1 {

  isOn = signal(false);

  switchIsOn(){
    this.isOn.update((v) => !v);
  }

  // --------_>

  nmbrClick = signal(0);

  incrementClick(valueToAdd: number){
    this.nmbrClick.update((v) => v + valueToAdd);
  }

  // ---------_>

  inputText = signal("");


}
