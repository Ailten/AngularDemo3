import { Component, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-4-1',
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './exo-4-1.html',
  styleUrl: './exo-4-1.css',
})
export class Exo41 {

  money = signal(0);

  birthDate = signal('');

}
