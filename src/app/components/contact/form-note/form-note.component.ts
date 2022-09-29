import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CustomDatePipe } from 'src/app/helpers/customDate';
import { UserLogged } from 'src/app/helpers/userlogged';
import { TblContactNotes, TblRefNoteCategories, TblWorkers } from 'src/app/models/db.model';
import { ODataResponse } from 'src/app/models/odata-response.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
export class FormNoteComponent implements OnInit {
  @Input('item')  id: number;
  @Output() successful = new EventEmitter<any>();
  listNote: Array<TblContactNotes>
  itemNote: Array<TblContactNotes>
  itemWorker :Array<TblWorkers>
  categoryNote: Array<TblRefNoteCategories>
  pageCount: number = 0;
  totalCount: number = 1;
  currentPage: number = 1; 
  formNote: FormGroup
  IdNote: number
  userLogin: boolean = true;
  userId: number;
  submitted: boolean = false;
  nameWorker: string
  datepipe: CustomDatePipe = new CustomDatePipe('en-US')


  listTitle = ['Note Date', 'Note Category', 'Note', 'Updated By', 'On']


  constructor(private noteService: NoteService) {
    this.formNote = new FormGroup({
      noteDate: new FormControl(''),
      NoteCategory: new FormControl(''),
      Note: new FormControl(''),
      UpdateBy: new FormControl(''),
      UpdateOn: new FormControl('')
    })
   }

  ngOnInit() {
    this.getWorker();
    this.getCategoryNote();
    let userLogged: UserLogged = new UserLogged();
    if (userLogged.isLogged()) {
      this.userLogin = true;
      this.userId = userLogged.getCurrentUser().userId;
    }
  }

  ngOnChanges(){
    this.getNoteByContactId();
  }

  getNoteByContactId(){
    let getNote = this.noteService.getNote(this.currentPage, 5,this.id,5).pipe(
      finalize(()=>{
        getNote.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.listNote = res.value
    })
  }

  getWorker(){
    let getWorker = this.noteService.getWorker().pipe(
      finalize(()=>{
        getWorker.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse)=>{
      this.itemWorker = res.value
    })
  }

  getCategoryNote(){
    let getCategoryNote = this.noteService.getCategoryNote().pipe(
      finalize(()=>{
        getCategoryNote.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse)=>{
      this.categoryNote = res.value
    })
  }
  getNoteById(){
    let getNoteById = this.noteService.getNoteById(this.IdNote).pipe(
      finalize(()=>{
        getNoteById.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.itemNote = res.value
      console.log(this.itemNote);
      
      this.handleDateNote()
    })
  }

  handleDateNote(){
    for (let i = 0; i< this.itemWorker.length; i++) {
      if(this.itemNote[0].UpdatedById === this.itemWorker[i].Id){
        this.nameWorker=this.itemWorker[i].UserId;
        break;
      }
    }
    let formattedNoteDate = this.datepipe.transform(this.itemNote[0].NoteDate)
    let formattedUpdatedOn = this.datepipe.transform(this.itemNote[0].UpdatedDate)
    this.formNote = new FormGroup({
      noteDate:  new FormControl(formattedNoteDate),
      NoteCategory: new FormControl(this.itemNote[0].NoteCategory),
      Note: new FormControl(this.itemNote[0].Note), 
      UpdateBy: new FormControl( this.nameWorker),
      UpdateOn: new FormControl(formattedUpdatedOn)
    })
  }
  edit(Id: number){
    this.IdNote = Id
    console.log(this.IdNote);
    setTimeout(() => {
      jQuery('#edit').modal('show')
      this.getNoteById();
      jQuery('#noteModal').modal('hide')
    }, 0);
  }

  delete(Id: number){
    this.IdNote = Id
    let deleteNote = this.noteService.delete(this.IdNote).pipe(
      finalize(()=> {
        deleteNote.unsubscribe();
      })
    )
    .subscribe(()=>{
      alert('Delete Successfully');
      this.getNoteByContactId()
    })
  }

  add(){
    setTimeout(() => {
      jQuery('#add').modal('show')
      jQuery('#noteModal').modal('hide')
    }, 0);
  }

  submit(checkE : Boolean){
    this.submitted= true;
    if(checkE == true){
      let formNote = {
        NoteDate:this.itemNote[0].NoteDate,
        NoteCategory: this.formNote.controls.NoteCategory.value,
        Note: this.formNote.controls.Note.value,
        UpdatedById: Number(this.userId),
        UpdatedDate: new Date()
      }
      console.log(formNote);
      
      const submit = this.noteService.updateNote(this.IdNote, formNote).pipe(
        finalize(()=> {
          submit.unsubscribe();
        })
      )
      .subscribe(()=>{
        alert('Save Successfully');
        this.getNoteByContactId()
        this.formNote.reset()
        setTimeout(() => {
          jQuery('#edit').modal('hide')
          jQuery('#noteModal').modal('show')
        }, 0);
      })
    }
    if(checkE==false){
      let formAddNote = {
        ContactId: this.id,
        NoteDate:new Date(),
        NoteCategory: this.formNote.controls.NoteCategory.value,
        Note: this.formNote.controls.Note.value,
        UpdatedById: Number(this.userId),
        UpdatedDate: new Date()
      }
      const add = this.noteService.addNote(formAddNote).pipe(
        finalize(()=> {
          add.unsubscribe();
        })
      )
      .subscribe(()=>{
        alert('Create Successfully');
        this.getNoteByContactId()
        this.formNote.reset()
        setTimeout(() => {
          jQuery('#add').modal('hide')
          jQuery('#noteModal').modal('show')
        }, 0);
      })
    }
  }

  backNoteList(check: Boolean){
    setTimeout(() => {
      if(check==true){
        jQuery('#edit').modal('hide')
      }
      if(check==false){
        jQuery('#add').modal('hide')
      }
      jQuery('#noteModal').modal('show')
    }, 0);
  }
}
