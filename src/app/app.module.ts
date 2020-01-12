import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CidadeModule } from './cidades/cidade.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CidadeModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
