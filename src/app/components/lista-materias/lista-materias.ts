import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Materia {
  nome: string
}

@Component({
  selector: 'app-lista-materias',
  imports: [RouterLink],
  templateUrl: './lista-materias.html',
  styleUrl: './lista-materias.scss'
})
export class ListaMaterias {

  materias: Materia[];

  constructor(){
    this.materias = this.carregarMateriaLocalStorage()
  }

  carregarMateriaLocalStorage(): Materia[]{
    let materiaLocalStorage = localStorage.getItem("materias");
    if(materiaLocalStorage === null){
      return []
    }

    let materias: Materia[] = JSON.parse(materiaLocalStorage)
    return materias
  }

  apagar(materia: Materia): void{
    let indiceParaApagar = this.materias.indexOf(materia);
    this.materias.splice(indiceParaApagar)
    this.salvarLocalStorage();
  }

  salvarLocalStorage(): void{
    let materiaString = JSON.stringify(this.materias);

    localStorage.setItem("materias", materiaString);
  }
}
