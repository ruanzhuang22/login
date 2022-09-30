import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ContactModule } from '../contact/contact.module';
import { NoteModule } from '../note/note.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { SmartComponent } from '../smart/smart.component';
import { CustomDatePipe } from 'src/app/helpers/customDate';
import { CustomFilterModule } from '../custom-filter/custom-filter.module';
import { CustomDateComponent } from '../custom-filter/custom-date/custom-date.component';
export const routes = [
    { path: "", component: HomeComponent, canActivate: [AuthGuard] },
];
@NgModule({
  declarations: [HomeComponent,SmartComponent, CustomDateComponent],
  imports: [
    CommonModule,
    ContactModule,
    NoteModule,
    Ng2SmartTableModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
