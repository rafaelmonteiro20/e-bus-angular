import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-cidades',
  templateUrl: './pesquisa-cidades.component.html',
  styleUrls: ['./pesquisa-cidades.component.css']
})
export class PesquisaCidadesComponent implements OnInit {

  cidades = [
    { id:1, nome:'Fortaleza', estado:'Ceará' },
    { id:2, nome:'Quixadá', estado:'Ceará' },
    { id:3, nome:'Recife', estado:'Pernambuco' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
