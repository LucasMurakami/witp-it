import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WhosThatPokemonCardInformation } from '../models/pokeApi.model';

@Injectable({
  providedIn: 'root'
})
export class Pokeapi {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonCardInfo(name: string): Observable<WhosThatPokemonCardInformation> {
    return this.http.get<WhosThatPokemonCardInformation>(`${this.baseUrl}/pokemon/${name}`);
  }
}
