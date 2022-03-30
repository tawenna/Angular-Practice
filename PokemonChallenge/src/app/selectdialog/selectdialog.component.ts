import { Component, OnInit, Inject,Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { PokemonResponse } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-selectdialog',
  templateUrl: './selectdialog.component.html',
  styleUrls: ['./selectdialog.component.css']
})
export class SelectdialogComponent implements OnInit {
  pokemondetails!:PokemonResponse;
  subPoke$ = new Subscription();

  constructor(@Inject(MAT_DIALOG_DATA) public data:string,
   private pokeservice:PokemonService,
   public dialogRef: MatDialogRef<SelectdialogComponent>
   ) { }

  ngOnInit(): void {
    this.subPoke$ = this.pokeservice.getPokemon(this.data).subscribe((
      data:PokemonResponse) => {this.pokemondetails = data;}
    );
  }
  selected(){
    this.pokeservice.getselected(this.data);
    this.dialogRef.close();
  }
  back():void{
    this.dialogRef.close();
  }

}
