import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PokemonService } from './pokemon.service';
import { SelectdialogComponent } from './selectdialog/selectdialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokemonChallenge';
  starterPokemons:string[] = [ "bulbasaur", "squirtle", "charmander" ]
  selectedPoke!:string;
  pokemonlist:string[] = [];
  showselected:boolean = false;
  constructor(    public dialog: MatDialog,
    private pokeservice:PokemonService){}

  ngOnInit(): void {
    this.pokeservice.subjectSelected$.subscribe((data: any) => {
      if (data) {
        //this.show = false;
        this.selectedPoke = data;
        console.log(this.selectedPoke);
        this.pokemonlist.push(this.selectedPoke);
        this.showselected = true;
        this.starterPokemons = [];
      }
    })
  }
  selectpoke(pokemon:string){
    this.dialog.open( SelectdialogComponent ,{
      width: '400px',
      height:'400px',
      data: pokemon
    })
  }
}
