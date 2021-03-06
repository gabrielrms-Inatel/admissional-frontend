import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
        {
            label: 'Aluno',
            items: [
                {label: 'Matricular aluno', routerLink: ['/aluno/create']},
                {label: 'Listar alunos', routerLink: ['/aluno']}
            ]
        },
        {separator:true},
        {
            label: 'Professor',
            items: [
                {label: 'Cadastrar professor', routerLink: ['/professor/create']},
                {label: 'Listar professores', routerLink: ['/professor']}
            ]
        },
        {separator:true},
        {
            label: 'Turma',
            items: [
                {label: 'Cadastrar turma', routerLink: ['/turma/create']},
                {label: 'Listar turmas', routerLink: ['/turma']}
            ]
        }
    ];
  }
}
