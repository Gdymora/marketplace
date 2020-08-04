import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './components/application/application.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { CityCursComponent } from './components/city-curs/city-curs.component';
import { FormAddCursComponent } from './components/form-add-curs/form-add-curs.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    CityCursComponent,
    FormAddCursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
