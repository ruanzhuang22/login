import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TblContactNotes } from '../models/db.model';
import { ModelHelper } from '../models/model-helper';
import { ODataResponse } from '../models/odata-response.model';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService extends BaseService{
  constructor(http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  getNote(pageIndex: number, pageSize: number, contactId:number, size: number): Observable<Object>{
    if (pageIndex <= 0)
      pageIndex = 1;
    if (pageSize <= 0)
      pageSize = size;
    let skip = (pageIndex - 1) * pageSize;
    let url: string = `/TblContactNotes?$filter=${ encodeURIComponent("ContactId eq " + contactId)}&$count=true&$top=${pageSize}&$skip=${skip}&$OrderBy=Id desc`;
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblContactNotes"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  getNoteById(id: number): Observable<Object>{
    let url = `/TblContactNotes?$filter=${ encodeURIComponent("Id eq " + id) }`;
    return super.get(url).pipe(
      catchError(err => throwError(err)),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblContactNotes"));
        odateRes.value = value;
        return odateRes;
      }
    ));
  }

  getAllNote(){
    let url = `/TblContactNotes?$expand=TblContact($select=Id,FirstName,LastName,Company,MailStatusCode)&$OrderBy=Id desc`;
    return super.get(url).pipe(
      catchError(err => throwError(err)),
      map((res) => {
        return res;
      }
    ));
  }

  getWorker(){
    let url: string= `/TblWorkers`
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblWorkers"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  getCategoryNote(){
    let url: string= `/TblRefNoteCategories`
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblRefNoteCategories"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  updateNote(Id: number, formData){
    let url = `TblContactNotes`;
    return super.patchEntity(url, Id, formData).pipe(
      catchError(err => throwError(() => new Error(err))),
      map((res) => {
        return res;
    }));
  }

  delete(Id: number){
    let result = this.deleteEntity("TblContactNotes", Id);
    return result.pipe(
      catchError(err => {
        return throwError(() => err);
      }),
    map((res) => this.jsonConvert.deserialize(res, ModelHelper.getClass('TblContactNotes'))));
  }

  addNote(formData: any): Observable<Object> {
    let url = `TblContactNotes`;
    return super.postEntity(url, formData).pipe(
      catchError(err => throwError(err)),
      map((res) => this.jsonConvert.deserialize(res, ModelHelper.getClass('TblContactNotes'))));
  }
}
