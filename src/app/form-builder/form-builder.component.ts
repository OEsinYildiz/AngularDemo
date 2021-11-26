import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required], // FormControl Öğresi
      contact: fb.group({ // FormGroup Öğresi
        email: [], // FormControl Öğresi
        phone: [] // FormControl Öğresi
      }),
      topics: fb.array([]) // FormArray Array
    });
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }

  ngOnInit(): void {
  }

}
