import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlApi = `${environment.api_url}/pokemons`
  constructor(
    private http: HttpClient
  ) {}

  getPokemon(idAuthor: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.urlApi, {
      params: {
        idAuthor: idAuthor
      }
    });
  }
  addPokemon(data: any) {
    return this.http.post(this.urlApi, data);
  }
  editPokemon(data: any) {
    return this.http.put(`${this.urlApi}/${data.id}`, data);
  }

  deletePokemon(data: any) {
    return this.http.delete(`${this.urlApi}/${data.id}`);
  }
}
