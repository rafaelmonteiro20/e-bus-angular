import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { CidadeService } from './cidade.service';

import { PesquisaCidadesComponent } from './pesquisa-cidades/pesquisa-cidades.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';

@NgModule({
  declarations: [
    PesquisaCidadesComponent,
    CadastroCidadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule
  ],
  exports: [
    PesquisaCidadesComponent,
    CadastroCidadeComponent
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
