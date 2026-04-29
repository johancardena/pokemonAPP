import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: false
})
export class PokemonListPage implements OnInit {

  nombrePokemon: string = '';
  pokemon: any = null;
  error: string = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {}

  buscarPokemon() {
    this.error = '';
    this.pokemon = null;

    if (!this.nombrePokemon.trim()) {
      this.error = 'Ingrese el nombre de un Pokémon';
      return;
    }

    this.pokemonService.buscarPokemon(this.nombrePokemon).subscribe({
      next: (data) => {
        this.pokemon = data;
      },
      error: () => {
        this.error = 'Pokémon no encontrado';
      }
    });
  }
}