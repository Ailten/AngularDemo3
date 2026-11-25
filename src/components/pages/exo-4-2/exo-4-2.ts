import { Component, signal } from '@angular/core';
import { OnOffPipe } from '../../pipes/on-off-pipe';
import { BithToAgePipe } from '../../pipes/bith-to-age-pipe';

@Component({
  selector: 'app-exo-4-2',
  imports: [OnOffPipe, BithToAgePipe],
  templateUrl: './exo-4-2.html',
  styleUrl: './exo-4-2.css',
})
export class Exo42 {

  isOn = signal(false);

}
