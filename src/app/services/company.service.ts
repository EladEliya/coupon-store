import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }

  public getCompany(): Observable<Company> {
    // get the token from the browser's session storage
    let token: string | null = sessionStorage.getItem('token');
    // set token so it is not null
    token = token ? token : "";
    let url = "http://localhost:8080/api/COMPANY/getCompany";
    // put the token in the http headers
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.get<Company>(url, options);
}
}
