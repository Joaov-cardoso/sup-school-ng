import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Professor {
  nome: string,
  cpf: string,
  nascimento: Date,
  cnpj: string,
  pix: string,
  nomeFantasia: string,
  valorHora: number,
  celular: string
}

@Component({
  selector: 'app-lista-professores',
  imports: [RouterLink, CommonModule],
  templateUrl: './lista-professores.html',
  styleUrl: './lista-professores.scss'
})
export class ListaProfessores {

  professores: Professor[];

  constructor(){
    this.professores = this.carregarProfessoresLocalStorage()
  }

  carregarProfessoresLocalStorage(): Professor[]{
    let professorLocalStogare = localStorage.getItem("professores");
    if(professorLocalStogare === null){
      return[]
    }

    let professores: Professor[] = JSON.parse(professorLocalStogare);
    return professores
  }

  apagar(professor: Professor): void{
    let indiceParaApagar = this.professores.indexOf(professor);
    this.professores.splice(indiceParaApagar);
    this.salvarLocalStorage()
  }

  salvarLocalStorage(): void{
    let professorString = JSON.stringify(this.professores);

    localStorage.setItem("professores", professorString)
  }

}
