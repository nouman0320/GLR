import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class WebApiUrlsService {
  //#region properties
  
  ServerUrl="http://localhost:10232";

  Controller=
  {
    Registration : "/Registration"
  };
  Actions=
  {
    login:"/login"
  };
  //#endregion

  constructor() 
  {
      
  }
  //#region methods
  //#endregion
}
