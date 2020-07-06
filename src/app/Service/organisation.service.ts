import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrganisationInfo } from '../Interface/IOrganisationInfo';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private http : HttpClient) { }
  readonly rootURL = 'https://api.github.com/orgs/';
  public errorStatus : number;
  type : boolean = true;

  getDetails(orgname:string,access_token:string):Observable<IOrganisationInfo>
  {
    {{debugger}}
    console.log(orgname,access_token);
    console.log(this.rootURL);
  return this.http.get<IOrganisationInfo>(this.rootURL+orgname+'/repos', { params: new HttpParams().set('access_token', access_token)
  }
  )
}
}


