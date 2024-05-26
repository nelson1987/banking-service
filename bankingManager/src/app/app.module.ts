import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddContaComponent } from './components/conta/add-conta/add-conta.component';
import { DetailsContaComponent } from './components/conta/details-conta/details-conta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContaComponent,
    DetailsContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
