import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TodoappComponent } from './component/todoapp/todoapp.component';
import { InputComponent } from './component/input/input.component';
import { TaskitemComponent } from './component/taskitem/taskitem.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoappComponent,
    InputComponent,
    TaskitemComponent,
    DialogComponent,
    StudentCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/todolist', pathMatch: 'full' },
      { path: 'createStudent/:id', component: StudentCreateComponent },
      { path: 'todolist', component: TodoappComponent },
    ]),
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
