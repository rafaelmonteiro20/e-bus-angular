import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaTrechosComponent } from './pesquisa-trechos/pesquisa-trechos.component';



@NgModule({
  declarations: [
    PesquisaTrechosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PesquisaTrechosComponent
  ]
})
export class TrechosModule { }
