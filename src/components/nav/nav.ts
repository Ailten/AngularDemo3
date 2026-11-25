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
    ];
  }

}
