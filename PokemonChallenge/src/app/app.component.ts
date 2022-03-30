import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokemonChallenge';
  starterPokemons:string[] = [ "bulbasaur", "squirtle", "charmander" ]
  constructor(    public dialog: MatDialog,
){

  }

  ngOnInit(): void {

  }
  selectpoke(){
    // this.dialog.open(SelectedComponent,{
    //   width: '600px',
    //   height:'700px',
    //   data:
    // })
  }
}
