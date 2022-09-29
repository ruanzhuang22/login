import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from 'src/app/services/contact.service';
import { ContactComponent } from './contact.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormNoteComponent } from './form-note/form-note.component';
import { NoteService } from 'src/app/services/note.service';
import { CustomDatePipe } from 'src/app/helpers/customDate';

@NgModule({
  declarations: [ContactComponent, FormContactComponent, FormNoteComponent, CustomDatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [ContactComponent,FormContactComponent, FormNoteComponent],
  providers: [ContactService, NoteService]
})
export class ContactModule { }
