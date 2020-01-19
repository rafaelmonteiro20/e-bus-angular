import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TrechoService {

  urlTrechos = 'http://localhost:8081/trechos';

  constructor(private http: HttpClient) { }

  pesquisa(): Promise<any> {
    let params = new HttpParams();
    return this.http.get(this.urlTrechos, { params })
      .toPromise()
      .then(response => response);
  }

}
