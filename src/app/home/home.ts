import { Component } from '@angular/core';
import { WhosThatPokemon } from '../components/whos-that-pokemon/whos-that-pokemon';

@Component({
  selector: 'app-home',
  imports: [WhosThatPokemon],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
