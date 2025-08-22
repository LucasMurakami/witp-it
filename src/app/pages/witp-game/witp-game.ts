import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhosThatPokemon } from "../../components/whos-that-pokemon/whos-that-pokemon";
import { Pokeapi } from '../../services/pokeapi.service';
import { jsonPokemon, WhosThatPokemonCardInformation } from '../../models/pokeapi.model';

@Component({
  selector: 'app-witp-game',
  imports: [WhosThatPokemon, CommonModule],
  templateUrl: './witp-game.html',
  styleUrl: './witp-game.css'
})
export class WitpGame implements OnInit {
  pokemonRandomList: jsonPokemon[] = [];
  pokemon: WhosThatPokemonCardInformation | null = null;
  isLoading = true;

  constructor(private pokeApi: Pokeapi) {}

  ngOnInit(): void {
      this.pokeApi.getRandomNames(4).subscribe(randomNames => {
      this.pokemonRandomList = randomNames;
      this.loadPokemonData(this.pokemonRandomList[0].name);
    });
  }

  loadPokemonData(name: string): void {
    this.isLoading = true;
    this.pokeApi.getPokemonCardInfo(name).subscribe((data: WhosThatPokemonCardInformation) => {
      this.pokemon = data;
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.isLoading = false;
    });
  }
}
