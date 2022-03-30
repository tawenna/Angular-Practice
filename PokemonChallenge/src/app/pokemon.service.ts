import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse,} from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private http: HttpClient) { }

  getPokemon(pokemon: string){
    return this.http.get<PokemonResponse>([this.baseUrl, pokemon].join('/'));
  }
}
