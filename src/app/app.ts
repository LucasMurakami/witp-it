import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhosThatPokemon } from './components/whos-that-pokemon/whos-that-pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WhosThatPokemon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('witp-it');
}
