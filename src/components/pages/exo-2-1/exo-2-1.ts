import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-2-1',
  imports: [FormsModule],
  templateUrl: './exo-2-1.html',
  styleUrl: './exo-2-1.css',
})
export class Exo21 {

  surname = signal('');
  name = signal('');
  birthDate = signal('2026-11-23');

  validateForm(){

    let birthDate = new Date(this.birthDate());
    const milisecInAYear = 1000*60*60*24*365;
    let ageInMiliSec = Date.now() - birthDate.getTime();
    let age = Math.floor(ageInMiliSec / milisecInAYear);

    let user = {
      surname: this.surname(),
      name: this.name(),
      age: age
    };

    console.log(user);
  }

}
