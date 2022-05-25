import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root/root.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './components/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyDetailsComponent } from './components/admin/company-details/company-details.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { CustomersDetailsComponent } from './components/admin/customers-details/customers-details.component';
import { EditCustomerComponent } from './components/admin/edit-customer/edit-customer.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { CompanyLayoutComponent } from './components/company-layout/company-layout.component';
import { MenuCompanyComponent } from './components/company-layout/menu-company/menu-company.component';



@NgModule({
  declarations: [
    
  
    RootComponent,     
    LoginComponent, LayoutComponent, HeaderComponent, MenuComponent, FooterComponent, Page404Component, AdminComponent, CustomerComponent, CompanyComponent, HomeComponent, CompanyDetailsComponent, ThumbnailComponent, CustomersDetailsComponent, EditCustomerComponent, AddCompanyComponent, AddCustomerComponent, CompanyLayoutComponent, MenuCompanyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
