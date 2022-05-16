import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddPokemonComponent } from './add-pokemon.component';

describe('AddPokemonComponent', () => {
  let app: AddPokemonComponent;
  let fixture: ComponentFixture<AddPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, ReactiveFormsModule
      ],
      declarations: [ AddPokemonComponent ]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddPokemonComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('Debe crear component AddPokemo', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debe retornar el campo nombre invalido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const name = app.form.controls.name;
    name.setValue(null);
    expect(name.invalid).toBeTruthy();
  });

  it('debe retornar el campo image invalido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const image = app.form.controls.image;
    image.setValue(null);
    expect(image.invalid).toBeTruthy();
  });

  it('debe retornar el campo attack invalido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const attack = app.form.controls.attack;
    attack.setValue(null);
    expect(attack.invalid).toBeTruthy();
  });

  it('debe retornar el campo defense invalido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const defense = app.form.controls.defense;
    defense.setValue(null);
    expect(defense.invalid).toBeTruthy();
  });


  it('debe retornar el campo nombre valido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const name = app.form.controls.name;
    name.setValue('Pokemon');
    expect(name.valid).toBeTruthy();
  });

  it('debe retornar el campo image valido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const image = app.form.controls.image;
    image.setValue('https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png');
    expect(image.valid).toBeTruthy();
  });

  it('debe retornar el campo Atack Valido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const attack = app.form.controls.attack;
    attack.setValue(100);
    expect(attack.valid).toBeTruthy();
  });

  it('debe retornar el campo defense Valido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const defense = app.form.controls.defense;
    defense.setValue(10);
    expect(defense.valid).toBeTruthy();
  });

  it('debe retornar un formulario Valido', () => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    const form = app.form;
    const name = app.form.controls.name;
    const image = app.form.controls.image;
    const attack = app.form.controls.attack;
    const defense = app.form.controls.defense;
    name.setValue('Pokemon');
    image.setValue('https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png');
    attack.setValue(100);
    defense.setValue(10);
    expect(form.valid).toBeTruthy();
  });
});
