import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

export class CidadeFilter {
  nome: string;
  pagina: number;
  totalPorPagina = 10;
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

    if (filtro.pagina) {
      params = params.set('page', filtro.pagina.toString());
    }

    return this.http.get(this.urlCidades, { params })
      .toPromise()
      .then(response => {
        const resultado = {
          lancamentos: response['content'],
          total: response['totalElements']
        }
        return resultado;
      });
  }

}
