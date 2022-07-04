import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  taskItem: any;
  id: any;

  onNoClick(): void {
    this.dialogRef.close();
  }
  onHello(): void {
    // nhan data tu todoapp component
    this.taskItem = this.data[0];
    this.id = this.data[1];
    this.taskItem.splice(this.id, 1);
    this.dialogRef.close();
  }
  ngOnInit(): void {}
}
