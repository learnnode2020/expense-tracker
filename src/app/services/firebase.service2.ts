import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService2 {

  constructor(public db: AngularFirestore) {}

  getDailyEntry(userKey){
    return this.db.collection('daily-entry').doc(userKey).snapshotChanges();
  }

  updateDailyEntry(userKey, value){
   // value.nameToSearch = value.name.toLowerCase();
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
   return this.db.collection('daily-entry').doc(userKey).set(value);
  }

  deleteDailyEntry(userKey){
    return this.db.collection('daily-entry').doc(userKey).delete();
  }

  getDailyEntries(){
    return this.db.collection('daily-entry').snapshotChanges();
  }

  // searchUsers(searchValue){
  //   return this.db.collection('daily-entry',ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value){
  //   return this.db.collection('daily-entry',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }

  createDailyEntry(value){
    return this.db.collection('daily-entry').add({
       glCode: value.glCode,
      clientName: value.clientName.toLowerCase(),
      quantity: value.quantity,
      rate: parseInt(value.rate),
      remarks: value.remarks,
      ot: parseInt(value.ot),
      ta: parseInt(value.ta),
      approvedBy: value.approvedBy,
      expenseDate: value.expenseDate,
      expenseType: value.expenseType,
      itemName: value.itemName,
      requestedBy: value.requestedBy,
      unit: value.unit,
    });
  }
}
