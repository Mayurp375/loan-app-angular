import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatDividerModule} from '@angular/material/divider';
import { AplyforloanComponent } from './aplyforloan/aplyforloan.component';

import { RegisterComponent } from './register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import { AboutComponent } from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TypesOfLoanComponent } from './types-of-loan/types-of-loan.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion'
import { ReactiveFormsModule } from '@angular/forms';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenerateOtpComponent } from './update/generate-otp/generate-otp.component';
import { UpdatePasswordComponent } from './update/update-password/update-password.component';
import { ResetPasswordComponentComponent } from './update/reset-password-component/reset-password-component.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AplyforloanComponent,
    RegisterComponent,
    AboutComponent,
    PageNotFoundComponent,
    TypesOfLoanComponent,
    CheckCibilComponent,
    DashboardComponent,
    GenerateOtpComponent,
    UpdatePasswordComponent,
    ResetPasswordComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,MatIconModule,MatButtonModule,MatToolbarModule,MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule ,MatMenuModule,MatTabsModule,
    MatExpansionModule,HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
