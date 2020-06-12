import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {

  baseUrl = "http://localhost:8080/aluno";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  matricularAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, aluno).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.messageService.add({severity:'error', summary: 'Ops', detail:'Não foi possível completar a ação.'})
    return EMPTY;
  }
}
