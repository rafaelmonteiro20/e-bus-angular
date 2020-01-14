import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CidadeService, Cidade } from '../cidade.service';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {

  cidade = new Cidade();

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
  }

  salva(form: FormControl) {
    this.cidadeService.salva(this.cidade)
      .then(() => {
        form.reset();
        this.cidade = new Cidade();
      });
  }

}
