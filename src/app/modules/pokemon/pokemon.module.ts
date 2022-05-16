import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableComponent } from './components/table/table.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PokemonComponent,
    TableComponent,
    AddPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PokemonModule { }
