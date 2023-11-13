import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PagesModule,
    StudentModule,
    AuthModule

   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
