import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import {HttpClientModule} from '@angular/common/http';
import { PremiumFormComponent } from './admin/premium-form/premium-form.component';
import { MonthlyFormComponent } from './admin/monthly-form/monthly-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './compo/navbar/navbar.component';
import { authInterceptorProviders } from './auth.interceptor';
import { GooglePayButtonModule } from '@google-pay/button-angular';


@NgModule({
  declarations: [
    AppComponent,
    PremiumFormComponent,
    MonthlyFormComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GooglePayButtonModule
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
