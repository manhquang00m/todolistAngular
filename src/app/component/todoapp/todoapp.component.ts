import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { TASK } from './mock-task';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent implements OnInit {
  // taskItem: { nameTask: string; check: boolean }[] = [
  //   { nameTask: 'rua bat', check: true },
  //   { nameTask: 'quet nha', check: false },
  //   { nameTask: 'di lam', check: false },
  //   { nameTask: 'abc', check: true },
  // ];

  taskItem = TASK;
  input = '';
  idTemp = 0;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addTask(input: string) {
    this.taskItem.unshift({
      nameTask: input,
      check: false,
    });
  }

  deleteTask(id: number) {
    this.dialog.open(DialogComponent, {
      height: '200px',
      width: '250px',
      data: [this.taskItem, id],
    });
  }
  undoTask(id: number) {
    this.taskItem[id].check = false;
  }
  editTask(id: number) {
    this.input = this.taskItem[id].nameTask;
    this.idTemp = id;
  }
  updateTask(input: string) {
    this.taskItem[this.idTemp].nameTask = input;
    this.input = '';
  }
  doneTask(id: number) {
    this.taskItem[id].check = true;
  }
}
