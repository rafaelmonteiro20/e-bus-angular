import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CidadeService {

  urlCidades = 'http://localhost:8081/cidades';

  constructor(private http: HttpClient) { }

  pesquisa(): Promise<any> {
    return this.http.get(this.urlCidades)
            .toPromise()
            .then(response => response);
  }

}
