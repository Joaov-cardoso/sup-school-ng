import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

interface Materia {
  nome: string
}

@Component({
  selector: 'app-cadastro-materia',
  imports: [FormsModule],
  templateUrl: './cadastro-materia.html',
  styleUrl: './cadastro-materia.scss'
})
export class CadastroMateria {

  materias: Materia[];

  nome: string = "";

  constructor(private router: Router) {
    this.materias = this.carregarMateriasLocalStorage();
  }

  salvar(): void {
    let materia: Materia = {
      nome: this.nome
    }

    this.materias.push(materia)

    this.salvarLocalStorage()
  }

  salvarLocalStorage(): void {
    let materiaString = JSON.stringify(this.materias);

    localStorage.setItem("materias", materiaString)
  }

  carregarMateriasLocalStorage(): Materia[] {
    let materiaNoLocalStorage = localStorage.getItem("materias")
    if (materiaNoLocalStorage === null) {
      return []
    }

    let materias: Materia[] = JSON.parse(materiaNoLocalStorage);
    return materias
  }


}
