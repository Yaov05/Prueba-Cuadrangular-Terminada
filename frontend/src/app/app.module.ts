import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { TablaPosComponent } from './components/tabla-pos/tabla-pos.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    TablaPosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
