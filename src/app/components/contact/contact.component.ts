import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { TblContacts, TblCounties } from 'src/app/models/db.model';
import { ODataResponse } from 'src/app/models/odata-response.model';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  listContact: Array<TblContacts>;
  pageCount: number = 0;
  totalCount: number = 1;
  currentPage: number = 1; 
  IdContact: number;
  IdContactNote: number;
  settings: any;
  country: Array<TblCounties>

  listTitle =['ID', 'First Name', 'Last Name', 'Company', 'Address', 'Town', 'Prov', 'Postal Code', 'Zone', 'Country','Phone', 'Email','']

  constructor(
    private contactService: ContactService
  ) { 
    this.listContact = new Array<TblContacts>();
    this.country = new Array<TblCounties>();
  }

  ngOnInit() {
    this.getListContact();
    this.getCountryById();
  }

  getListContact(){
    let getListContact = this.contactService.getContacts(this.currentPage, 10,10).pipe(
      finalize(()=>{
        getListContact.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.listContact = res.value
      this.pageCount = res.count
      this.totalCount = Math.ceil(res.count/10)
      console.log(res.count);
      
    });
  }

  pageChangeNumber($event) {
    this.currentPage = $event;
    this.getListContact();
  }

 

  edit(id: number, event){
    this.IdContact = id
    setTimeout(() => {
      jQuery('#editModal').modal('show')
    }, 0);
    event.stopPropagation();
  }

  openNote(id: number){
    this.IdContactNote = id
    setTimeout(() => {
      jQuery('#noteModal').modal('show')
    }, 0);
  }

  getCountryById(){
    let getCountryById = this.contactService.getAllCountries().pipe(
      finalize(()=>{
        getCountryById.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.country = res.value
    });
  }

  onSave(event){
    if(event == 'true'){
      this.getListContact();
    }
  }
  
  searchNote(){
    
  }
}
