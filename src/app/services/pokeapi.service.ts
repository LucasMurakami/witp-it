import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { jsonPokemon, WhosThatPokemonCardInformation } from '../models/pokeapi.model';

@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Gets the information of a specific Pokémon card.
  getPokemonCardInfo(name: string): Observable<WhosThatPokemonCardInformation> {
    return this.http.get<WhosThatPokemonCardInformation>(`${this.baseUrl}/pokemon/${name}`);
  }

  // Gets from the Json random names. Takes as input a certain number to return the names.
  getRandomNames(count: number): Observable<jsonPokemon[]> {
  return this.http.get<jsonPokemon[]>('/json/pokedex_names.json').pipe(
    map(names => {
      const ids = Array.from({ length: 809 }, (_, i) => i + 1);
      const randomIds = ids.sort(() => 0.5 - Math.random()).slice(0, count);
      return randomIds.map(id => names[id - 1]);
    })
  );
}
}
