import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  buscarPokemon(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nombre.toLowerCase()}`);
  }
}