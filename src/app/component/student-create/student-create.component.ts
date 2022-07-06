import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
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
        this.formData.setValue({
          name: this.serviceStudent.getStudent()[this.id].name,
          email: this.serviceStudent.getStudent()[this.id].email,
        });
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

  get name() {
    return this.formData.get('name');
  }
  get email() {
    return this.formData.get('email');
  }
}
