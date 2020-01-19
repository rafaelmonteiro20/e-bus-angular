import { Component, OnInit } from '@angular/core';
import { TrechoService } from '../trecho.service';

@Component({
  selector: 'app-pesquisa-trechos',
  templateUrl: './pesquisa-trechos.component.html',
  styleUrls: ['./pesquisa-trechos.component.css']
})
export class PesquisaTrechosComponent implements OnInit {

  trechos = [];

  constructor(private trechoService: TrechoService) { }

  ngOnInit() {
    this.pesquisa();
  }

  pesquisa() {
    this.trechoService.pesquisa()
      .then(trechos => this.trechos = trechos);
  }

}
