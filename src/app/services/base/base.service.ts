import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JsonConvert } from 'json2typescript';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserLogged } from 'src/app/helpers/userlogged';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected jsonConvert: JsonConvert;

  constructor(protected http: HttpClient) {
    this.jsonConvert = new JsonConvert();
  }

  protected getHeaders(): Object {
    let header = {
      "Accept": 'application/json',
    };
    let userLogged: UserLogged = new UserLogged();
    if (userLogged.isLogged()) {
      header['Authorization'] = 'Bearer ' + userLogged.getToken();
    }
    return header;
  }
  protected getHeader(): HttpHeaders {
    return new HttpHeaders();
  }


  protected get(url: string, params: any = null): Observable<Object> {
    params = params || {};
    const options = {
      params
    };
    options['headers'] = this.getHeaders();
    return this.http.get(environment.apiUrl + url, options);
  }

  // OData Methods
  protected putEntity(entitySet: string, id: number, body: Object = {}): Observable<any> {
    const options = {};
    options['headers'] = this.getHeader();
    return this.http.put(`${environment.apiUrl}/${entitySet}(${id})`, body, options).pipe(catchError(this.formatErrors));
  }

  public patchEntity(entitySet: string, id: number, body: Object = {}): Observable<any> {
    const options = {};
    options['headers'] = this.getHeader();
    return this.http.patch(`${environment.apiUrl}/${entitySet}(${id})`, body, options).pipe(catchError(this.formatErrors));
  }

  protected deleteEntity(entitySet: string, id: number): Observable<any> {
    const options = {};
    options['headers'] = this.getHeader();
    return this.http.delete(`${environment.apiUrl}/${entitySet}(${id})`, options).pipe(catchError(this.formatErrors));
  }

  protected postEntity(entitySet: string, body: Object = {}): Observable<any> {
    const options = {};
    options['headers'] = this.getHeader();
    return this.http.post(`${environment.apiUrl}/${entitySet}`, body, options).pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(() => error);
  }

  protected postLogin(entitySet: string, body: Object = {}): Observable<any> {
    const options = {};
    options['headers'] = { 'Content-Type': 'application/x-www-form-urlencoded' };
    return this.http.post(`${environment.apiSecurity}/${entitySet}`, body, options).pipe(catchError(this.formatErrors));
  }
}
