import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

   // add delete method here
   public deleteOneCompany(companyId: number | undefined): Observable<any> {
    // get the token from the browser's session storage
    let token: string | null = sessionStorage.getItem('token');
    // set token so it is not null
    token = token ? token : "";
    let url = "http://localhost:8080/api/ADMINISTRATOR/" + companyId;
    // put the token in the http headers
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.delete<any>(url, options);
}

public updateCompany(company: Company): Observable<any> {
    let url = "http://localhost:8080/api/ADMINISTRATOR/updateCompany";
    let token = sessionStorage.getItem("token");
    token = token ? token : ""; // make sure token is not null
    let theHeaders = new HttpHeaders({token:token});
    //let theHeaders = new HttpHeaders().set('token', token).set('accept', '*/*').set('Content-Type', 'application/json');
    let options = { headers: theHeaders };
    return this.httpClient.put(url, company, options);
}
public addCompany(company: Company): Observable<any> {
    let url = "http://localhost:8080/api/ADMINISTRATOR/addCompany";
    let token = sessionStorage.getItem("token");
    token = token ? token : ""; // make sure token is not null
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders };
    return this.httpClient.post(url, company, options);
}

public getOneCompany(companyId: number): Observable<Company> {
    // get the token from the browser's session storage
    let token: string | null = sessionStorage.getItem('token');
    // set token so it is not null
    token = token ? token : "";
    let url = "http://localhost:8080/api/ADMINISTRATOR/get-company/" + companyId;
    // put the token in the http headers
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.get<Company>(url, options);
}

public getAllCompanies(): Observable<Company[]> {
    // get the token from the browser's session storage
    let token: string | null = sessionStorage.getItem('token');
    // set token so it is not null
    token = token ? token : "";
    let url = "http://localhost:8080/api/ADMINISTRATOR/getAllCompanies";
    // put the token in the http headers
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.get<Company[]>(url, options);
}


public getAllCustomers(): Observable<Customer[]> {
    // get the token from the browser's session storage
    let token: string | null = sessionStorage.getItem('token');
    // set token so it is not null
    token = token ? token : "";
    let url = "http://localhost:8080/api/ADMINISTRATOR/getAllCustomer";
    // put the token in the http headers
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.get<Customer[]>(url, options);
}

  // add delete method here
  public deleteOneCustomer(customerId: number | undefined): Observable<any> {
    // get the token from the browser's session storage
    let token: string | null = sessionStorage.getItem('token');
    // set token so it is not null
    token = token ? token : "";
    let url = "http://localhost:8080/api/ADMINISTRATOR/delete-customer/" + customerId;
    // put the token in the http headers
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.delete<any>(url, options);
}

public updateCustomer(customer: Customer): Observable<any> {
    let url = "http://localhost:8080/api/ADMINISTRATOR/updatecustomer";
    let token = sessionStorage.getItem("token");
    token = token ? token : ""; // make sure token is not null
    let theHeaders = new HttpHeaders({token:token});
    //let theHeaders = new HttpHeaders().set('token', token).set('accept', '*/*').set('Content-Type', 'application/json');
    let options = { headers: theHeaders };
    return this.httpClient.put(url, customer, options);
}
public addCustomer(customer: Customer): Observable<any> {
    let url = "http://localhost:8080/api/ADMINISTRATOR/addcustomer";
    let token = sessionStorage.getItem("token");
    token = token ? token : ""; // make sure token is not null
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders };
    return this.httpClient.post(url, customer, options);
}

public getOneCustomer(customerId: number): Observable<Company> {
    // get the token from the browser's session storage
    let token: string | null = sessionStorage.getItem('token');
    // set token so it is not null
    token = token ? token : "";
    let url = "http://localhost:8080/api/ADMINISTRATOR/getOneCustomer/" + customerId;
    // put the token in the http headers
    let theHeaders = new HttpHeaders().set("token", token);
    let options = { headers: theHeaders };
    return this.httpClient.get<Customer>(url, options);
}







}
