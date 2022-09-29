import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { TblContactNotes,TblContacts,TblRefEmailStatuses, TblWorkers } from 'src/app/models/db.model';
import { ODataResponse } from 'src/app/models/odata-response.model';
import { ContactService } from 'src/app/services/contact.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  listNote:  Array<TblContactNotes>;  
  listWorker: Array<TblWorkers>;  
  listStatusCode: Array<TblRefEmailStatuses>;  
  pageCount: number = 0;
  totalCount: number = 1;
  currentPage: number = 1; 

  listTitle = ['Note Category', 'Note', 'Note Date', 'First Name', 'Last Name', 'Company', 'Status', 'Entered By', 'Entered Date']

  constructor(
    private noteService : NoteService,
    private contactService : ContactService
  ) {
      
  }

  ngOnInit() {
    this.getAllNote()
    this.getWorker()
    this.getStatusCode()
  }

  getAllNote(){
    let getAllNote = this.noteService.getAllNote().pipe(
      finalize(()=>{
        getAllNote.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse)=>{
      this.listNote = res.value
      console.log(this.listNote);
    })
  }

  getWorker(){
    let getWorker = this.noteService.getWorker().pipe(
      finalize(()=>{
        getWorker.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse)=>{
      this.listWorker = res.value
    })
  }

  getStatusCode(){
    let getListStatusCode = this.contactService.getAllStatusCode().pipe(
      finalize(()=>{
        getListStatusCode.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.listStatusCode = res.value
      console.log(this.listStatusCode);
      
    });
  }
}
