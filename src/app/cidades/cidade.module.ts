import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { PesquisaCidadesComponent } from './pesquisa-cidades/pesquisa-cidades.component';
import { CidadeService } from './cidade.service';

@NgModule({
  declarations: [
    PesquisaCidadesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule
  ],
  exports: [
    PesquisaCidadesComponent
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
