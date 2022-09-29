import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  declarations: [NoteComponent],
  imports: [
    CommonModule,
    FilterModule
  ],
  exports: [
    NoteComponent
  ]
})
export class NoteModule { }
