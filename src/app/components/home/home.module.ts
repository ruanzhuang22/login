import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ContactModule } from '../contact/contact.module';
import { NoteModule } from '../note/note.module';
export const routes = [
    { path: "", component: HomeComponent, canActivate: [AuthGuard] },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ContactModule,
    NoteModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
