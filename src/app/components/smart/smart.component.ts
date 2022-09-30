import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CustomDatePipe } from 'src/app/helpers/customDate';
import { TblContacts, TblRefNoteCategories, TblRefStatusCodes, TblWorkers } from 'src/app/models/db.model';
import { ODataResponse } from 'src/app/models/odata-response.model';
import { ContactService } from 'src/app/services/contact.service';
import { NoteService } from 'src/app/services/note.service';
import { Constants } from '../contants';
import { CustomDateComponent } from '../custom-filter/custom-date/custom-date.component';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SmartComponent  implements OnInit{
  listNote: any
  listWorker: Array<TblWorkers>
  listNoteCategory: Array<TblRefNoteCategories>
  listSCode: Array<TblRefStatusCodes>
  datepipe: CustomDatePipe = new CustomDatePipe('en-US')
  public data = [];
  public settings = {
    selectMode: 'single', //single|multi
    hideHeader: false,
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: true,
      delete: true,
      custom: [],
      position: 'none' // left|right
    },
    noDataMessage: 'No data found',
    columns: {     
      NoteCategory: {
        title: 'Note Category',
        editable: false,   
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: Constants.NoteCategory,
          },
        },
      },
      Note: {
        title: 'Note',
        type: 'string',
        filter: true
      },
      NoteDate: {
        title: 'Note Date',
        type: 'Date',
        filter: {
          type: 'custom',
          component:  CustomDateComponent
        },
        valuePrepareFunction: (NoteDate) => {
          if(NoteDate){
            return this.datepipe.transform(NoteDate);
          }
          else{
            return ""
          }
        }
      },
      'TblContact.FirstName': {
        title: 'First Name',
        type: 'string',
        valuePrepareFunction: (cell, row: any) => {
          if(row.TblContact != null){
            return row.TblContact.FirstName;
          }
          else{
            return ""
          }
        }
      },
      'TblContact.LastName': {
        title: 'Last Name',
        type: 'string',
        valuePrepareFunction: (cell, row: any) => {
          if(row.TblContact != null){
            return row.TblContact.LastName;
          }
          else{
            return ""
          }
        }
      },
      'TblContact.Company': {
        title: 'Company',
        type: 'string',
        valuePrepareFunction: (cell, row: any) => {
          if(row.TblContact != null){
            return row.TblContact.Company;
          }
          else{
            return ""
          }
        }
      },
      'TblContact.StatusCode': {
        title: 'Status',
        type: 'string',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: Constants.Status
          },
        },
        valuePrepareFunction: (cell,row: any) =>{
          if(row.TblContact != null){
            let s = this.listSCode.find(x => x.StatusCode == row.TblContact.StatusCode)
            if(s){
              return s.Status
            }
          }
        }
      },
      UpdatedById: {
        title: 'Entered By',
        type: 'string',
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: Constants.UserName
          },
        },
        // filterFunction: (value)=>{
        //   let a = this.listWorker.find(x => x.UserId == value)
        //   if(a){
        //     return a.Id
        //   }
        // },
        valuePrepareFunction: (value) => {
          let name = this.listWorker.find(x => x.Id == value);
          if (name) {
            return name.UserId;
          }
        }
      },
      UpdatedDate: {
        title: 'Entered Date',
        type: 'Date',
        valuePrepareFunction: (UpdatedDate) => {
          if(UpdatedDate){
            return this.datepipe.transform(UpdatedDate);
          }
          else{
            return ""
          }
        }
      }
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

  constructor(
    private noteService: NoteService,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.getData()
    this.getWorker()
    this.getStatusCode()
    this.getNoteCategory()
  }

  public getData() {
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
    let getAllWorker = this.noteService.getWorker().pipe(
      finalize(()=>{
        getAllWorker.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse)=>{
      this.listWorker = res.value
      console.log(this.listWorker);
      
    })
  }

  getStatusCode(){
    let getAllSCode = this.contactService.getAllStatusCode().pipe(
      finalize(()=>{
        getAllSCode.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse)=>{
      this.listSCode = res.value
      console.log(this.listSCode);
    })
  }

  getNoteCategory(){
    let getNoteCategory = this.noteService.getCategoryNote().pipe(
      finalize(()=>{
        getNoteCategory.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse)=>{
      this.listNoteCategory = res.value
      console.log(this.listNoteCategory );
      
    })
  }

  

  public onUserRowSelect (event){
    
  }
  
  

}
