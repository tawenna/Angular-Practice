import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonResponse, Sprite } from '../pokemon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit, OnDestroy {
  @Input() pokemonname!:string;
  constructor(private pokemonservice:PokemonService) { }
  pokedetails!:PokemonResponse;
  subPoke$ = new Subscription();
  pokepic!:string;
  ngOnInit(): void {
    this.subPoke$ = this.pokemonservice.getPokemon(this.pokemonname).subscribe((
      data:PokemonResponse) => {this.pokedetails = data;}
    );

  }
  ngOnDestroy(): void {
    this.subPoke$.unsubscribe();
  }


}
