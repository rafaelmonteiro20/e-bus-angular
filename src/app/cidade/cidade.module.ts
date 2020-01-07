import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaCidadesComponent } from './pesquisa-cidades/pesquisa-cidades.component';
import { CidadeService } from './cidade.service';

@NgModule({
  declarations: [
    PesquisaCidadesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PesquisaCidadesComponent
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
