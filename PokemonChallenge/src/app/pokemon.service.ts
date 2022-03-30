import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse,} from './pokemon';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private http: HttpClient) { }
  subjectSelected$ = new Subject();
  getPokemon(pokemon: string){
    return this.http.get<PokemonResponse>([this.baseUrl, pokemon].join('/'));
  }
  getselected(poke:string){
    this.subjectSelected$.next(poke);
  }
}
