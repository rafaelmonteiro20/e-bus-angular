import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PesquisaCidadesComponent } from './pesquisa-cidades/pesquisa-cidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PesquisaCidadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
