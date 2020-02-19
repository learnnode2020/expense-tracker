import { Routes} from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { DailyExpensesComponent } from './daily-expenses/daily-expenses.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { UserComponent } from './user/user.component';
import { DailyEntryComponent } from './daily-entry/daily-entry.component';
import { EditDailyEntryComponent } from './edit-daily-entry/edit-daily-entry.component';
import { DailySummaryComponent } from './daily-summary/daily-summary.component';
import { EditDailyEntryResolver } from './edit-daily-entry/edit-daily-entry.resolver';

export const rootRouterConfig: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UserComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: 'details/:id', component: EditUserComponent, resolve: {data : EditUserResolver} },
    { path: 'app-expenses', component: ExpensesComponent },
    { path: 'daily-entry', component: DailyEntryComponent },
    {path:  'single-entry', component: DailyExpensesComponent},
    {path:  'daily-summary', component: DailySummaryComponent},
    { path: 'daily-details/:id', component: EditDailyEntryComponent, resolve: {data : EditDailyEntryResolver} },
  ];
