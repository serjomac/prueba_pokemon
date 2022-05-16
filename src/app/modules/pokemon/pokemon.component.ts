import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  showForm = false;
  selectedItem: any;

  // CREAR COLUMNAS
  columns = [
    {
      displayName: 'Nombre',
      name: 'nombre',
    },
    {
      displayName: 'Imagen',
      name: 'nombre',
    },
    {
      displayName: 'Ataque',
      name: 'nombre',
    },
    {
      displayName: 'Defensa',
      name: 'nombre',
    },
    {
      displayName: 'Accion',
      name: 'accion',
    }
  ]

  pokemonsList: Pokemon[] = [];
  pokemonsListAux: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemon('1').subscribe((data: Pokemon[]) => {
      this.pokemonsList = data;
      this.pokemonsListAux = data;
    });
  }

  addPokemon(event: any) {
      console.log(event);
      event['idAuthor'] = 1
      event['type'] = 'normal'
      event['hp'] = 50
      this.pokemonService.addPokemon(event).subscribe((res: any) => {
        this.showForm = false;
        this.getPokemons();
      });
    
  }

  editPokemon(data: any) {
    this.pokemonService.editPokemon(data).subscribe((res: any) => {
      this.showForm = false;
      this.selectedItem = null;
      this.getPokemons();
    });
  }

  showAddForm() {
    this.showForm = !this.showForm;
  }

  edit(data: any) {
    console.log(data);
    this.selectedItem = data;
    this.showForm = true;
  }

  delete(data: any) {
    this.pokemonService.deletePokemon(data).subscribe((res: any) => {
      this.getPokemons();
    });
  }

  cancel() {
    this.showForm = false;
    this.selectedItem = null;
  }

  search(event: any) {
    let query: string = event.target.value;
    if (query.length == 0) {
      this.pokemonsList = this.pokemonsListAux;
      return;
    }
    const found = this.pokemonsList.filter(element => element.name?.toUpperCase().includes(query.toUpperCase()));
    this.pokemonsList = found;
  }
}
