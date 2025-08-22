import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhosThatPokemon } from "../../components/whos-that-pokemon/whos-that-pokemon";
import { Pokeapi } from '../../services/pokeapi.service';
import { jsonPokemon, WhosThatPokemonCardInformation } from '../../models/pokeapi.model';
import { EndgameModal } from "../../components/endgame-modal/endgame-modal";

@Component({
  selector: 'app-witp-game',
  imports: [WhosThatPokemon, CommonModule, EndgameModal],
  templateUrl: './witp-game.html',
  styleUrl: './witp-game.css'
})
export class WitpGame implements OnInit {
  // Render Pokemon Cards
  pokemonRandomList: jsonPokemon[] = [];
  pokemon: WhosThatPokemonCardInformation | null = null;

  // Render Other components
  isLoading = true;
  showEndgameModal = false;

  // Game Logic
  score = 0;
  round = 1;
  maxRounds = 10;
  selectedAnswer: string | null = null;
  isCorrect: boolean | null = null;

  constructor(private pokeApi: Pokeapi) {}

  ngOnInit(): void {
      this.pokeApi.getRandomNames(4).subscribe(randomNames => {
      this.pokemonRandomList = randomNames;
      this.loadPokemonData(this.pokemonRandomList[Math.floor(Math.random() * 4)].name);
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

  handleAnswer(selected: string): void {
    if (!this.selectedAnswer) {      
      this.selectedAnswer = selected;
      this.isCorrect = selected.toLowerCase() === this.pokemon?.name.toLowerCase();
      if (this.isCorrect) this.score++;
        setTimeout(() => this.nextRound(), 3500);
    }
  }

  nextRound(): void {
    this.round++;
    this.selectedAnswer = null;
    this.isCorrect = null;
    if (this.round <= this.maxRounds) {
      this.pokeApi.getRandomNames(4).subscribe(randomNames => {
        this.pokemonRandomList = randomNames;
        this.loadPokemonData(this.pokemonRandomList[Math.floor(Math.random() * 4)].name);
      });
    } else {
      console.log('Game Over! Final Score:', this.score);
      this.showEndgameModal = true;
    }
  }

  getButtonClass(pokemonName: string): string {
    if (!this.selectedAnswer) {
      return '';
    }

    const isCorrectAnswer = pokemonName.toLowerCase() === this.pokemon?.name.toLowerCase();
    
    if (isCorrectAnswer) {
      return 'correct';
    }

    if (pokemonName === this.selectedAnswer && !isCorrectAnswer) {
      return 'incorrect';
    }

    return '';
  }

  revealPokemon(): string {
    if(!this.selectedAnswer) {
      return '';
    }

    return "reveal";
  }

  restartGame(): void {
    this.score = 0;
    this.round = 1;
    this.showEndgameModal = false;
    this.selectedAnswer = null;
    this.isCorrect = null;
    this.loadPokemonData(this.pokemonRandomList[Math.floor(Math.random() * 4)].name);
  }
}
