import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';

import { AngularFireModule } from '@angular/fire/';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './services/firebase.service';
import { FirebaseService2 } from './services/firebase.service2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import {MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
//import { MaterialModule } from './material.module';

import { ExpensesComponent } from './expenses/expenses.component';
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';
import { DailyEntryComponent } from './daily-entry/daily-entry.component';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';
import { EditDailyEntryResolver } from './edit-daily-entry/edit-daily-entry.resolver';
import { EditDailyEntryComponent } from './edit-daily-entry/edit-daily-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    AvatarDialogComponent,
    ExpensesComponent,
    DailyExpensesComponent,
    DailyEntryComponent,
    DailySummaryComponent,
    EditDailyEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [FirebaseService, FirebaseService2, EditUserResolver, EditDailyEntryResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
