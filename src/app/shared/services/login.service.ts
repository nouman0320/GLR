import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {Location} from '@angular/common';
import {WebApiUrlsService} from './web-api-urls.service';
import { HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Registration } from '../models/Registration';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http:HttpClient;
  private location : Location;
  private webApiUrl:WebApiUrlsService;
  private email: string;
  private password :string;

  constructor(http: HttpClient, location:Location, webApiUrl : WebApiUrlsService )
  { 
    this.http=http;
    this.location=location;
    this.webApiUrl=webApiUrl;
  }
  login(email : string, password :string ):Observable<boolean>
  {
    const url=this.webApiUrl.ServerUrl + this.webApiUrl.Controller.Registration + this.webApiUrl.Actions.login;
    const body={"email": email, "password" : password};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return  this.http.post(url,JSON.stringify(body),httpOptions).pipe(
      map((res:boolean)=>
      {
        return res;
      })
    );    
  }
  register(registration : Registration) : Observable<boolean>
  {
    const url=this.webApiUrl.ServerUrl + this.webApiUrl.Controller.Registration + this.webApiUrl.Actions.register;
    const body=registration;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    return  this.http.post(url,JSON.stringify(body),httpOptions).pipe(
      map((res:boolean)=>
      {
        return res;
      })
    );  


  }
  getRequest():any
  {
    const url=this.webApiUrl.ServerUrl + "/value"
    return this.http.get(url);    
  }
}
