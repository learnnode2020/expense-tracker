import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from '../avatar-dialog/avatar-dialog.component';
import { Router } from '@angular/router';
import { FirebaseService2 } from '../services/firebase.service2';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-daily-entry',
  templateUrl: './daily-entry.component.html',
  styleUrls: ['./daily-entry.component.scss']
})

export class DailyEntryComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  exampleForm: FormGroup;
  //avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

//   validation_messages = {
//    'name': [
//      { type: 'required', message: 'Name is required.' }
//    ],
//    'surname': [
//      { type: 'required', message: 'Surname is required.' }
//    ],
//    'age': [
//      { type: 'required', message: 'Age is required.' },
//    ]
//  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService2
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      // glcode: ['', Validators.required ],
      // clientname: ['', Validators.required ],
      glCode: [null],
      clientName: [''],
      quantity: [''],
      rate: [''],
      remarks: [''],
      approvedBy: [''],
      ot: [''],
      ta: [''],
      expenseDate: [''],
      expenseType: [''],
      itemName: [''],
      requestedBy: [''],
      unit: [''],
      vendorName: ['']
    });
  }

 /* openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.avatarLink = result.link;
      }
    });
  }*/

  resetFields() {
   // this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    this.exampleForm = this.fb.group({
      //name: new FormControl('', Validators.required),
      glCode: new FormControl(''),
      clientName: new FormControl(''),
      remarks: new FormControl(''),
      quantity: new FormControl(''),
      rate: new FormControl(''),
      approvedBy: new FormControl(''),
      ot: new FormControl(''),
      ta: new FormControl(''),
      expenseDate: new FormControl(''),
      expenseType: new FormControl(''),
      itemName: new FormControl(''),
      requestedBy: new FormControl(''),
      unit: new FormControl(''),
      vendorName: new FormControl('')
    });
  }

  onSubmit(value) {
    this.firebaseService.createDailyEntry(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    );
  }
}


