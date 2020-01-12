import { Component, OnInit } from '@angular/core';
import { CidadeService, CidadeFilter } from '../cidade.service';

@Component({
  selector: 'app-pesquisa-cidades',
  templateUrl: './pesquisa-cidades.component.html',
  styleUrls: ['./pesquisa-cidades.component.css']
})
export class PesquisaCidadesComponent implements OnInit {

  filtro = new CidadeFilter();
  cidades = [];
  totalItens: number;

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.pesquisa();
  }

  pesquisa(pagina: number = null) {
    this.filtro.pagina = pagina;
    this.cidadeService.pesquisa(this.filtro)
      .then(resultado => {
        this.cidades = resultado.lancamentos,
        this.totalItens = resultado.total
      });
  }

  paginaMudada(event: any) {
    this.pesquisa(event.page - 1);
  }

}
