import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Turma {
  nome: string,
  sigla: string;
}

@Component({
  selector: 'app-cadastro-turma',
  imports: [FormsModule],
  templateUrl: './cadastro-turma.html',
  styleUrl: './cadastro-turma.scss'
})
export class CadastroTurma {

  turmas: Turma[];

  nome: string = "";
  sigla?: string;

  cadastrar(): void {

    let turma: Turma = {
      nome: this.nome,
      sigla: this.sigla!
    }

    this.turmas.push(turma)
    this.salvarLocalStorage();
    this.router.navigate(["/turma"])
  }
  constructor(private router: Router) {
    this.turmas = this.carregarTurmasLocalStorage();
  }

  carregarTurmasLocalStorage(): Turma[] {
    let turmaLocalStorage = localStorage.getItem("alunos");
    if (turmaLocalStorage === null) {
      return []
    }

    let turmas: Turma[] = JSON.parse(turmaLocalStorage);
    return turmas
  }

  salvarLocalStorage(): void {
    let turmasString = JSON.stringify(this.turmas)

    localStorage.setItem("turmas", turmasString)
  }
}
