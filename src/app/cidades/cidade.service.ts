import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

export class CidadeFilter {
  nome: string;
  estado: string = "";
  pagina: number;
  totalPorPagina = 10;
}

export class Cidade {
  nome: string;
  estado: string = "";
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

    if (filtro.estado) {
      params = params.set('estado', filtro.estado);
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

  salva(cidade: Cidade) : Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<Cidade>(this.urlCidades, cidade, { headers })
      .toPromise();
  }

}
