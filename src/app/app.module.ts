import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { CidadeModule } from './cidades/cidade.module';
import { TrechosModule } from './trechos/trechos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CidadeModule,
    TrechosModule,
    PaginationModule.forRoot(),
    AppRoutingModule,
    ErrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
