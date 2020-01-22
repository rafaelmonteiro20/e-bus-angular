import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaCidadesComponent } from './cidades/pesquisa-cidades/pesquisa-cidades.component';
import { PesquisaTrechosComponent } from './trechos/pesquisa-trechos/pesquisa-trechos.component';
import { PaginaNaoEncontradaComponent } from './erros/pagina-nao-encontrada/pagina-nao-encontrada.component';

const rotas: Routes = [
    { path: 'cidades', component: PesquisaCidadesComponent },
    { path: 'trechos', component: PesquisaTrechosComponent },
    { path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
