import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatSortModule
} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule,
        MatInputModule,
        MatSortModule
    ]
})
export class MaterialModule { }