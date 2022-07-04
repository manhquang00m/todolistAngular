import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css'],
})
export class TaskitemComponent implements OnInit {
  @Input() taskItem: any;
  @Output() deleteId: EventEmitter<any> = new EventEmitter();
  @Output() undoId: EventEmitter<any> = new EventEmitter();
  @Output() editId: EventEmitter<any> = new EventEmitter();
  @Output() doneId: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  idDelete(id: number) {
    this.deleteId.emit(id);
  }
  idUndo(id: number) {
    this.undoId.emit(id);
  }
  idEdit(id: number) {
    this.editId.emit(id);
  }
  idDone(id: number) {
    this.doneId.emit(id);
  }
}
