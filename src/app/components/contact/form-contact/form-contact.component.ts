import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { TblContacts } from 'src/app/models/db.model';
import { ODataResponse } from 'src/app/models/odata-response.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
  @Input('item')  id: number;
  @Output() success = new EventEmitter<any>();
  itemContact: Array<TblContacts>
  prov: Array<string>
  country: Array<string>
  emailStatus: any
  statusCode: Array<string>
  formEditContact: FormGroup
  contact: TblContacts
  public submitted: boolean = false;



  constructor(
    private contactService: ContactService
  ) {
    this.itemContact = new Array<TblContacts>();
    this.formEditContact = new FormGroup({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      Email: new FormControl('', [Validators.required]),
      Phone: new FormControl(''),
      Company: new FormControl(''),
      Town: new FormControl(''),
      Address: new FormControl(''),
      PostalCode: new FormControl(''),
      Zone: new FormControl(''),
      Country: new FormControl(0),
      eStatus: new FormControl(0),
      Status: new FormControl(''),
    })
   }

  ngOnInit() {
    this.getListProv();
    this.getListCountry();
    this.getListEmailStatus();
    this.getListStatusCode();
  }

  ngOnChanges() {
    this.getContactDetail();
  }


  getContactDetail(){
    let getContactDetail = this.contactService.getContactDetail(this.id).pipe(
      finalize(()=>{
        getContactDetail.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.itemContact = res.value
      this.handleGetData()
    })
  }

  getListProv(){
    let getListProv = this.contactService.getAllProv().pipe(
      finalize(()=>{
        getListProv.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.prov = res.value
    });
  }

  getListCountry(){
    let getListCountry = this.contactService.getAllCountries().pipe(
      finalize(()=>{
        getListCountry.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.country = res.value
    });
  }

  getListEmailStatus(){
    let getListEmailStatus = this.contactService.getAllEmailStatuses().pipe(
      finalize(()=>{
        getListEmailStatus.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.emailStatus = res.value
    });
  }
  
  getListStatusCode(){
    let getListStatusCode = this.contactService.getAllStatusCode().pipe(
      finalize(()=>{
        getListStatusCode.unsubscribe();
      })
    )
    .subscribe((res: ODataResponse) => {
      this.statusCode = res.value
    });
  }

  handleGetData(){
    this.formEditContact = new FormGroup({
      FirstName: new FormControl(this.itemContact[0].FirstName),
      LastName: new FormControl(this.itemContact[0].LastName),
      Email: new FormControl(this.itemContact[0].Email, [Validators.required]),
      Phone: new FormControl(this.itemContact[0].Phone),
      Company: new FormControl(this.itemContact[0].Company),
      Town: new FormControl(this.itemContact[0].Town),
      Address: new FormControl(this.itemContact[0].Address1),
      PostalCode: new FormControl(this.itemContact[0].PostalCode),
      Zone: new FormControl(this.itemContact[0].NewZone),
      Country: new FormControl(this.itemContact[0].CountyId),
      eStatus: new FormControl(this.itemContact[0].EMailStatusId),
      Status: new FormControl(this.itemContact[0].StatusCode)
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.formEditContact.invalid) {
      return;
    }
    let formEditContact = {
      FirstName: this.formEditContact.controls.FirstName.value,
      LastName:  this.formEditContact.controls.LastName.value,
      Email: this.formEditContact.controls.Email.value,
      Phone: this.formEditContact.controls.Phone.value,
      Company: this.formEditContact.controls.Company.value,
      Town: this.formEditContact.controls.Town.value,
      Address1: this.formEditContact.controls.Address.value,
      PostalCode: this.formEditContact.controls.PostalCode.value,
      NewZone: this.formEditContact.controls.Zone.value,
      CountyId: Number(this.formEditContact.controls.Country.value),
      EMailStatusId: Number(this.formEditContact.controls.eStatus.value),
    };
    const submit = this.contactService.updateContact(formEditContact,this.id).pipe(
      finalize(()=> {
        submit.unsubscribe();
      })
    )
    .subscribe(()=>{
      this.success.emit('true');
      alert('Save Successful');
      setTimeout(() => {
        jQuery('#editModal').modal('hide')
      }, 0);
    })
  }
}
