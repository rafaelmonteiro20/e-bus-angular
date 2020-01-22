import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaCidadesComponent } from './cidades/pesquisa-cidades/pesquisa-cidades.component';
import { PesquisaTrechosComponent } from './trechos/pesquisa-trechos/pesquisa-trechos.component';

const rotas: Routes = [
    { path: 'cidades', component: PesquisaCidadesComponent },
    { path: 'trechos', component: PesquisaTrechosComponent }
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
