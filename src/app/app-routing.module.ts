import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyDetailsComponent } from './components/admin/company-details/company-details.component';
import { CustomersDetailsComponent } from './components/admin/customers-details/customers-details.component';
import { EditCustomerComponent } from './components/admin/edit-customer/edit-customer.component';
import { CompanyLayoutComponent } from './components/company-layout/company-layout.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  { path: "login", component:LoginComponent },
  {path:"welcome", component:LayoutComponent, children:[
  {path:"home", component:HomeComponent},
  {path: "ADMINISTRATOR", component:AdminComponent},
  {path: "ADMINISTRATOR/company-details/:id", component: CompanyDetailsComponent},
  {path: "ADMINISTRATOR/customers-details", component: CustomersDetailsComponent},
  {path: "ADMINISTRATOR/edit-customer/:id", component: EditCustomerComponent},
  {path: "ADMINISTRATOR/add-company", component: AddCompanyComponent},
  {path: "ADMINISTRATOR/add-customer", component: AddCustomerComponent},

  ]},
  {path:"welcome", component: CompanyLayoutComponent, children:[

    {path: "COMPANY", component:CompanyComponent}, //will show our company details

  ]},
  
  
  
  {path: "CUSTOMER", component:CustomerComponent},
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"**", component:Page404Component}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
