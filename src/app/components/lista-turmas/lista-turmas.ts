import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Turma {
  nome: string,
  sigla: string;
}

@Component({
  selector: 'app-lista-turmas',
  imports: [RouterLink],
  templateUrl: './lista-turmas.html',
  styleUrl: './lista-turmas.scss'
})
export class ListaTurmas {

  turmas: Turma[];

  constructor() {
    this.turmas = this.carregarTurmaLocalStorage()
  }

  carregarTurmaLocalStorage(): Turma[] {
    let turmaLocalStorage = localStorage.getItem("turmas");
    if (turmaLocalStorage === null){
      return []
    }

    let turmas: Turma[] = JSON.parse(turmaLocalStorage);
    return turmas
  }

  apagar(turma: Turma): void{
    let indiceParaApagar = this.turmas.indexOf(turma);
    this.turmas.splice(indiceParaApagar);
    this.salvarLocalStorage()
  }
  
  salvarLocalStorage(): void{
    let turmaString = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", turmaString)
  }
}
