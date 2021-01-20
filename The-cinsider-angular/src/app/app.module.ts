import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { LanderComponent } from './lander/lander.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductBasedComponent } from './product-based/product-based.component';
import { ServiceBasedComponent } from './service-based/service-based.component';
import { CompanyComponent } from './company/company.component';
import { CommonModule } from '@angular/common';
import { CompanyService } from './global.service';
import { SearchListComponent } from './search-list/search-list.component';

const appRoutes: Routes = [
  { path: '', component:  LanderComponent},
  { path: 'productBased', component:  ProductBasedComponent},
  { path: 'productBased/:id', component:  ProductBasedComponent},
  { path: 'serviceBased', component:  ServiceBasedComponent},
  { path: 'serviceBased/:id', component:  ServiceBasedComponent},
  { path: 'company/:id', component:  CompanyComponent},
  { path: 'company/:id', component:  CompanyComponent},
  { path: 'searchList/:id', component:  SearchListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    LanderComponent,
    CompanyComponent,
    ProductBasedComponent,
    ServiceBasedComponent,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
