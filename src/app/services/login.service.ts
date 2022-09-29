import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { JsonConvert } from 'json2typescript';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{

  constructor(http: HttpClient) {
    super(http);
    this.jsonConvert = new JsonConvert();
  }

  public login(username: string, password: string): Observable<Object>{
    let datapost = "userid=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
    return super.postLogin('login', datapost);
  }
}
