import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService2 } from '../services/firebase.service2';

@Injectable()
export class EditDailyEntryResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService2) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let userId = route.paramMap.get('id');
      this.firebaseService.getDailyEntry(userId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
