import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit, OnChanges  {

  @Input() selectedItem: any;
  @Output() onAdd = new EventEmitter<any>();
  @Output() onEdit = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();

  titleButton = 'Agregar';

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
    attack: [0, Validators.required],
    defense: [0, Validators.required]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
     console.log(this.selectedItem);
     if (this.selectedItem) {
       this.titleButton = 'Editar';
      this.form.controls.name.setValue(this.selectedItem.name);
      this.form.controls.image.setValue(this.selectedItem.image);
      this.form.controls.attack.setValue(this.selectedItem.attack);
      this.form.controls.defense.setValue(this.selectedItem.defense);
    }
    } 

  slideDefence(val: any) {
    console.log(val);
  }
  slideAtack(val: any) {
    console.log(val);
  }

  addPokemon() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.onAdd.emit(this.form.value);
  }

  editPokemon() {
    this.selectedItem.name = this.form.controls.name.value;
    this.selectedItem.image = this.form.controls.image.value;
    this.selectedItem.attack = this.form.controls.attack.value;
    this.selectedItem.defense = this.form.controls.defense.value;
    this.onEdit.emit(this.selectedItem);
  }

  onEmitEvent() {
    if (this.selectedItem) {
      this.editPokemon();
    } else {
      this.addPokemon()
    }
  }
  
  validarCampos(campo: string): boolean | null {
    return this.form.controls[campo].errors
      && this.form.controls[campo].touched;
  }

  cancel() {
    this.onCancel.emit();
  }


}
