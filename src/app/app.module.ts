import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AdminModule } from './components/admin/admin.module';
import { HomeComponent } from './components/frontend/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { NotfoundComponent } from './components/common/notfound/notfound.component';

import { TokenInterceptor } from './auth/token.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexhomeComponent } from './components/common/indexhome/indexhome.component';
import { CommonheaderComponent } from './components/common/commonheader/commonheader.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    IndexhomeComponent,
    CommonheaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
