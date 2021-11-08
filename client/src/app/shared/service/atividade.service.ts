import { Atividade } from './../../../shared/model/Atividade.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  url = 'localhost:8000/v1/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private httpClient: HttpClient,
  ) {
   
  }

  public getAtividades(): Observable<Atividade[]> {
    return this.httpClient.get<Atividade[]>("api" + 'list-atividade');
  }

  public postAtividade(descricao: string):Observable<Atividade> {
    return this.httpClient.post<Atividade>("api" + 'create-atividade', { "descricao": descricao }, this.httpOptions);
  }
  
  public putAtividade(id: string):Observable<number[]> {
    return this.httpClient.put<Array<number>>("api" + 'finaly-atividade', { "id": id }, this.httpOptions);
  }

  public deleteAtividade(id: string):Observable<number>  {
    return this.httpClient.delete<number>("api" + 'delete-atividade/' + id);
  }
  
}
