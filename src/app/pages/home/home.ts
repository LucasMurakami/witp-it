import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhosThatPokemon } from '../../components/whos-that-pokemon/whos-that-pokemon';

@Component({
  selector: 'app-home',
  imports: [WhosThatPokemon, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
