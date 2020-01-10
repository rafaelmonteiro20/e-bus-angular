import { Component, OnInit } from '@angular/core';
import { CidadeService, CidadeFilter } from '../cidade.service';

@Component({
  selector: 'app-pesquisa-cidades',
  templateUrl: './pesquisa-cidades.component.html',
  styleUrls: ['./pesquisa-cidades.component.css']
})
export class PesquisaCidadesComponent implements OnInit {

  cidades = [];
  nome: string;

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.pesquisa();
  }

  pesquisa() {
    this.cidadeService.pesquisa({ nome: this.nome })
        .then((cidades) => this.cidades = cidades);
  }

}
