import { Atividade } from './../../../../shared/model/Atividade.model';
import { AtividadeService } from './../../../shared/service/atividade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  atividadesConcluidas: Atividade[] = [];
  atividadesNaoConcluidas: Atividade[] = [];

  constructor(
    public atividadeService: AtividadeService,
  ) {
  }

  ngOnInit(): void {
    this.getAtividades();
  }

  terminarAtividade(id: string): void {
    
    this.atividadeService.putAtividade(id).subscribe(result => {});
    window.location.reload();
  }

  excluirAtividade(id: string): void {
    
    this.atividadeService.deleteAtividade(id).subscribe(result => {});
    window.location.reload();
  }

  stringToDate(string: string): Date {
    return new Date(
      parseInt(string.slice(0, 4)),
      parseInt(string.slice(5, 7)),
      parseInt(string.slice(8, 10)),
      parseInt(string.slice(11, 13)),
      parseInt(string.slice(14, 16)),
      parseInt(string.slice(17, 19)),
      parseInt(string.slice(20, 23)),
    );
  }

  getAtividades() {
    this.atividadeService.getAtividades().subscribe(data => {
      this.atividadesConcluidas = data.filter(dataFill => dataFill.concluido);
      this.atividadesNaoConcluidas = data.filter(dataFill => !dataFill.concluido);
      this.atividadesConcluidas = this.atividadesConcluidas.sort((a, b) => (
        this.stringToDate(a.data_termino.toString()).getTime() -
        this.stringToDate(b.data_termino.toString()).getTime()) * -1);
      this.atividadesNaoConcluidas = this.atividadesNaoConcluidas.sort((a, b) => (
        this.stringToDate(a.data_criacao.toString()).getTime() -
        this.stringToDate(b.data_criacao.toString()).getTime()) * -1);
    }
    );
  }
}
