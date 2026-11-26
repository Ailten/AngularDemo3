
import { JsonPipe } from '@angular/common';
import { Component, resource, signal } from '@angular/core';

@Component({
  selector: 'app-exo-7',
  imports: [JsonPipe],
  templateUrl: './exo-7.html',
  styleUrl: './exo-7.css',
})
export class Exo7 {

  idPokemon = signal(1);
  maxIdPokemon = signal(255);

  pokemon = resource({
    params: () => ({ id: this.idPokemon() }),
    loader: ({ params }) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((r) => r.json())
        .then((data) => {
          console.log(data);

          // get type.
          this.pokemonTypeImgUrl.set([]);
          let types = data.types;
          for(let i=0; i<types.length; i++){
            let type = types[i];

            fetch(`${type.type.url}`)
              .then((r) => r.json())
              .then((data) => {
                let sprites = data.sprites;
                let urlSpriteType = sprites['generation-iii'].emerald.name_icon;
                this.pokemonTypeImgUrl.update((v) => [...v, urlSpriteType]);
              });
          }

          return data;
        }),
  });

  pokemonTypeImgUrl = signal<string[]>([]);

  previous(){
    this.idPokemon.update((v) => Math.max(v - 1, 1));
  }
  next(){
    this.idPokemon.update((v) => Math.min(v + 1, this.maxIdPokemon()));
  }

}
