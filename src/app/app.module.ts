import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReposTableComponent } from './components/list/repos-table/repos-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    ReposTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
