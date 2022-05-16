import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Constants } from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  // DECORADORES
  @Input() dataTable: any[] = [];
  @Input() columns: any[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  // VARS
  constants = Constants;

  constructor() {
    console.log(this.columns);
  }

  ngOnInit(): void {
  }

  edit(event: any) {
    this.onEdit.emit(event);
  }
  delete(event: any) {
    this.onDelete.emit(event);
  }

}
