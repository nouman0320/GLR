import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Location} from '@angular/common';
import {WebApiUrlsService} from './web-api-urls.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http:Http;
  private location : Location;
  private webApiUrl:WebApiUrlsService;
  private email: string;
  private password :string;

  constructor(http: Http, location:Location, webApiUrl : WebApiUrlsService )
  { 
    this.http=http;
    this.location=location;
    this.webApiUrl=webApiUrl;
  }
  login(email : string, password :string ):any
  {
    let url=this.webApiUrl.ServerUrl + this.webApiUrl.Controller.Registration + this.webApiUrl.Actions.login;
    let body={'email': email, 'password' : password};
    
    
    let opts = new RequestOptions();
    opts.headers = new Headers();
    opts.headers.append('Access-Control-Allow-Origin','*');
    return  this.http.post(url,body,opts);    
  }
}
