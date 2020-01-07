import { Injectable } from '@angular/core';

export class CidadeService {

  cidades = [
    { id:1, nome:'Fortaleza', estado:'Ceará' },
    { id:2, nome:'Quixadá', estado:'Ceará' },
    { id:3, nome:'Recife', estado:'Pernambuco' },
    { id:4, nome:'Quixeramobim', estado:'Ceará' }
  ];

  constructor() { }

  pesquisa() {
    return this.cidades;
  }

}
