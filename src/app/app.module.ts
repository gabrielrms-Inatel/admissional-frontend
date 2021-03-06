import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/template/views/home/home.component';
import { AlunoCreateComponent } from './components/template/aluno/aluno-create/aluno-create.component';
import { AlunoReadComponent } from './components/template/aluno/aluno-read/aluno-read.component';
import { ProfessorReadComponent } from './components/template/professor/professor-read/professor-read.component';
import { ProfessorCreateComponent } from './components/template/professor/professor-create/professor-create.component';
import { TurmaCreateComponent } from './components/template/turma/turma-create/turma-create.component';
import { TurmaReadComponent } from './components/template/turma/turma-read/turma-read.component';
import { TurmaUpdateComponent } from './components/template/turma/turma-update/turma-update.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { ListboxModule } from 'primeng/listbox';
import { TurmaReadAlunosComponent } from './components/template/turma/turma-read-alunos/turma-read-alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AlunoCreateComponent,
    AlunoReadComponent,
    ProfessorReadComponent,
    ProfessorCreateComponent,
    TurmaCreateComponent,
    TurmaReadComponent,
    TurmaUpdateComponent,
    TurmaReadAlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    FieldsetModule,
    ListboxModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
