import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface CidadeFilter {
  nome: string;
}

@Injectable()
export class CidadeService {

  urlCidades = 'http://localhost:8081/cidades';

  constructor(private http: HttpClient) { }

  pesquisa(filtro: CidadeFilter): Promise<any> {
    let params = new HttpParams();

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    console.log(filtro.nome);

    return this.http.get(this.urlCidades, { params })
              .toPromise()
              .then(response => response['content']);
  }

}
