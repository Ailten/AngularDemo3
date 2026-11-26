import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Link {
  name: string,
  route: string
}

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit{

  navTitle = 'menu';

  links: Link[] = [];

  ngOnInit(): void {
    this.links = [
      {route: 'home'              , name:'home'},
      {route: 'exercices/exo-1'   , name:'exo 1'},
      {route: 'exercices/exo-2-1' , name:'exo 2.1'},
      {route: 'exercices/exo-2-2' , name:'exo 2.2'},
      {route: 'exercices/exo-3'   , name:'exo 3'},
      {route: 'exercices/exo-4-1' , name:'exo 4.1'},
      {route: 'exercices/exo-4-2' , name:'exo 4.2'},
      {route: 'exercices/exo-4-3' , name:'exo 4.3'},
      {route: 'exercices/exo-5'   , name:'exo 5'},
      {route: 'exercices/exo-6'   , name:'exo 6'},
      {route: 'exercices/exo-7'   , name:'exo 7'},
      {route: 'exercices/exo-8'   , name:'exo 8'},

      {route: 'gambling'   , name:'gambling'},
    ];
  }

}
