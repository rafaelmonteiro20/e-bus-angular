import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaTrechosComponent } from './pesquisa-trechos/pesquisa-trechos.component';
import { TrechoService } from './trecho.service';
import { CadastroTrechoComponent } from './cadastro-trecho/cadastro-trecho.component';

@NgModule({
  declarations: [
    PesquisaTrechosComponent,
    CadastroTrechoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PesquisaTrechosComponent
  ],
  providers: [
    TrechoService
  ]
})
export class TrechosModule { }
