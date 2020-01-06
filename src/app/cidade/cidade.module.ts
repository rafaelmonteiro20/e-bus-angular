import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaCidadesComponent } from './pesquisa-cidades/pesquisa-cidades.component';

@NgModule({
  declarations: [
    PesquisaCidadesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PesquisaCidadesComponent
  ]
})
export class CidadeModule { }
