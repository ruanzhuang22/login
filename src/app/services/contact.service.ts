import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ModelHelper } from '../models/model-helper';
import { ODataResponse } from '../models/odata-response.model';
import { BaseService } from './base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService{
  constructor(http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  //get list contact
  getContacts(pageIndex: number, pageSize: number, size: number): Observable<Object>{
    if (pageIndex <= 0)
      pageIndex = 1;
    if (pageSize <= 0)
      pageSize = size;
    let skip = (pageIndex - 1) * pageSize;
    let url: string = `/TblContacts?$count=true&$top=${pageSize}&$skip=${skip}`;
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblContacts"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  getAllProv(): Observable<Object>{
    let url: string = `/TblRefProvinces`;
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblRefProvinces"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }
  
  getAllProvById(Id:  Number): Observable<Object>{
    let url = `/TblRefProvinces?$filter=${ encodeURIComponent("Id eq " + Id) }`;
    return super.get(url).pipe(
      catchError(err => throwError(err)),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblRefProvinces"));
        odateRes.value = value;
        return odateRes;
      }
      ));
  }

  getAllCountries(): Observable<Object>{
    let url: string = `/TblCounties`;
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblCounties"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  getAllEmailStatuses(): Observable<Object>{
    let url: string = `/TblRefEmailStatuses`;
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblRefEmailStatuses"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  getAllStatusCode(): Observable<Object>{
    let url: string = `/TblRefStatusCodes`;
    return super.get(url).pipe(
      catchError(err=> throwError(()=> new Error(err))),
      map((res)=>{
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblRefStatusCodes"));
        odateRes.value = value;
        return odateRes;
      })
    );
  }

  getContactDetail(Id: number) : Observable<Object> {
    let url = `/TblContacts?$filter=${ encodeURIComponent("Id eq " + Id) }`;
    return super.get(url).pipe(
      catchError(err => throwError(err)),
      map((res) => {
        const odateRes: ODataResponse = this.jsonConvert.deserializeObject(res, ODataResponse);
        let value = this.jsonConvert.deserializeArray(odateRes.value,  ModelHelper.getClass("TblContacts"));
        odateRes.value = value;
        return odateRes;
      }
      ));
  }
  updateContact(formData: any, Id: number): Observable<Object> {
    let url = `TblContacts`;
    return super.patchEntity(url, Id, formData).pipe(
      catchError(err => throwError(() => new Error(err))),
      map((res) => {
        return res;
      }));
  }
}
