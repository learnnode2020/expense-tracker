import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { FirebaseService2 } from '../services/firebase.service2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-daily-entry',
  templateUrl: './edit-daily-entry.component.html',
  styleUrls: ['./edit-daily-entry.component.scss']
})
export class EditDailyEntryComponent implements OnInit {

  exampleForm: FormGroup;
  item: any;

  validation_messages = {
   'name': [
     { type: 'required', message: 'Name is required.' }
   ],
   'surname': [
     { type: 'required', message: 'Surname is required.' }
   ],
   'age': [
     { type: 'required', message: 'Age is required.' },
   ]
 };

  constructor(
    public firebaseService: FirebaseService2,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }

  createForm() {
    this.exampleForm = this.fb.group({
      // name: [this.item.name, Validators.required],
      // surname: [this.item.surname, Validators.required],
      // age: [this.item.age, Validators.required]
      glCode: [this.item.glCode],
      clientName: [this.item.clientName],
      remarks: [this.item.remarks],
      quantity: [this.item.quantity],
      rate: [this.item.rate],
      approvedBy: [this.item.approvedBy],
      ot: [this.item.ot],
      ta: [this.item.ta],
      expenseDate: [this.item.expenseDate],
      expenseType: [this.item.expenseType],
      itemName: [this.item.itemName],
      requestedBy: [this.item.requestedBy],
      unit: [this.item.unit],
      vendorName: [this.item.vendorName],
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(AvatarDialogComponent, {
  //     height: '400px',
  //     width: '400px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result){
  //       this.item.avatar = result.link;
  //     }
  //   });
  // }

  onSubmit(value){
    //value.avatar = this.item.avatar;
    //value.age = Number(value.age);
    value.glCode = value.glCode;
    value.clientName = value.clientName;
    value.quantity = Number(value.quantity);
    value.rate = Number(value.rate);
    value.remarks = value.remarks;
    value.approvedBy = value.approvedBy;
    value.ot = Number(value.ot);
    value.ta = Number(value.ta);
    value.expenseDate = value.expenseDate;
    value.expenseType = value.expenseType;
    value.itemName = value.itemName;
    value.requestedBy = value.requestedBy;
    value.unit = value.unit;
    value.vendorName = value.vendorName;
    this.firebaseService.updateDailyEntry(this.item.id, value)
    .then(
      res => {
        this.router.navigate(['/home']);
      }
    )
  }

  delete(){
    this.firebaseService.deleteDailyEntry(this.item.id)
    .then(
      res => {
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
      }
    )
  }

  cancel(){
    this.router.navigate(['/home']);
  }

}
