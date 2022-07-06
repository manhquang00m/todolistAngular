import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { DialogComponent } from '../dialog/dialog.component';
import { TASK } from './mock-task';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css'],
})
export class TodoappComponent implements OnInit {
  taskItem = TASK;
  input = '';
  idTemp = 0;
  today: number = Date.now();
  displayedColumns: string[] = ['id', 'name', 'email', 'edit'];
  listStudent = this.StudentService.getStudent();
  constructor(
    public dialog: MatDialog,
    private StudentService: StudentServiceService
  ) {}

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
