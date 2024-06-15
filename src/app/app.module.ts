import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuModule} from "@angular/material/menu";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { PaymentsComponent } from './payments/payments.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {MatTableModule} from "@angular/material/table";
import {HttpClient, HttpClientModule, provideHttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoadStudentsComponent,
    LoadPaymentsComponent,
    PaymentsComponent,
    StudentsComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatPaginator,
    MatSortModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthGuard,
    AuthorizationGuard,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
