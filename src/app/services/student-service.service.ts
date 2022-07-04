import { Injectable } from '@angular/core';
import { Student } from '../component/student';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  dataStudent: Student[] = [
    { id: 0, name: 'Quang', email: 'vq@gmail.com' },
    { id: 1, name: 'Son', email: 'son@gmail.com' },
  ];

  constructor() {}

  getStudent() {
    return this.dataStudent;
  }
  addStudent(id: number, name: string, email: string) {
    this.dataStudent.push({
      id: id,
      name: name,
      email: email,
    });
  }
  updateStudent(id: number, name: string, email: string) {
    this.dataStudent[id].name = name;
    this.dataStudent[id].email = email;
  }
}
