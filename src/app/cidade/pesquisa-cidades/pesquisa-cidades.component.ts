import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-pesquisa-cidades',
  templateUrl: './pesquisa-cidades.component.html',
  styleUrls: ['./pesquisa-cidades.component.css']
})
export class PesquisaCidadesComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.cidades = this.cidadeService.pesquisa();
  }

}
