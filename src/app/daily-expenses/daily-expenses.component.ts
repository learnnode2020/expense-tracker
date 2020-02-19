import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-daily-expenses',
  templateUrl: './daily-expenses.component.html',
  styleUrls: ['./daily-expenses.component.css']
})
export class DailyExpensesComponent implements OnInit {
  exampleForm: FormGroup;
  constructor( private fb: FormBuilder) {  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.exampleForm = this.fb.group({
      name: [''],
      surname: [''],
      age: ['']
    });
  }
}
