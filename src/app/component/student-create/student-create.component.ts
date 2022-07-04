import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent implements OnInit {
  @Input() students = '';
  formData: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  inputName = '';
  inputEmail = '';

  constructor(
    private serviceStudent: StudentServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  id: number = 0;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      if (paramMap.get('id') === 'creat') {
        console.log('Creat');
      } else {
        // Lay du lieu da chon tu bang, truyen vao o input
        this.inputName = this.serviceStudent.getStudent()[this.id].name;
        this.inputEmail = this.serviceStudent.getStudent()[this.id].email;
      }
    });
  }
  onSubmit(): void {
    if (this.id >= 0) {
      this.serviceStudent.updateStudent(
        this.id,
        this.formData.value.name,
        this.formData.value.email
      );
    } else {
      this.serviceStudent.addStudent(
        this.serviceStudent.getStudent().length,
        this.formData.value.name,
        this.formData.value.email
      );
    }
    this.router.navigate(['/todolist']);
  }
}
