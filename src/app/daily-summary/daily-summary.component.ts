import { Component, OnInit } from '@angular/core';
import { FirebaseService2 } from '../services/firebase.service2';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-daily-summary',
  templateUrl: './daily-summary.component.html',
  styleUrls: ['./daily-summary.component.scss']
})
export class DailySummaryComponent implements OnInit {

  ageValue: number = 0;
  searchValue: string = "";
  items: Array<any>;
  glCode_filtered_items: Array<any>;
  clientName_filtered_items: Array<any>;

  constructor(
    public firebaseService: FirebaseService2,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getDailyEntries()
    .subscribe(result => {
      this.items = result;
      this.glCode_filtered_items = result;
      this.clientName_filtered_items = result;
    })
  }

  viewDetails(item){
    this.router.navigate(['/daily-details/' + item.payload.doc.id]);
  }

  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  // searchByName(){
  //   let value = this.searchValue.toLowerCase();
  //   this.firebaseService.searchUsers(value)
  //   .subscribe(result => {
  //     this.name_filtered_items = result;
  //     this.items = this.combineLists(result, this.age_filtered_items);
  //   })
  // }

  // rangeChange(event){
  //   this.firebaseService.searchUsersByAge(event.value)
  //   .subscribe(result =>{
  //     this.age_filtered_items = result;
  //     this.items = this.combineLists(result, this.name_filtered_items);
  //   })
  // }

  combineLists(a, b){
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  }

}
