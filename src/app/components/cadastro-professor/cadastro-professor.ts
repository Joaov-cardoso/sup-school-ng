
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Professor {
  nome: string,
  cpf: string,
  nascimento: Date,
  cnpj: string,
  pix: string,
  nomeFantasia: string,
  valorHora: string,
  celular: string
}
@Component({
  selector: 'app-cadastro-professor',
  imports: [FormsModule],
  templateUrl: './cadastro-professor.html',
  styleUrl: './cadastro-professor.scss'
})
export class CadastroProfessor {

  professores: Professor[];

  nome?: string
  cpf?: string
  nascimento?: Date
  cnpj?: string
  pix?: string
  nomeFantasia?: string
  valorHora?: string
  celular?: string

  constructor(private router: Router){
    this.professores = this.carregarProfessoresLocalStorage()
  }

  salvar(): void{
    let professor: Professor = {
      nome: this.nome!,
      cpf: this.cpf!,
      nascimento: this.nascimento!,
      cnpj: this.cnpj!,
      pix: this.pix!,
      nomeFantasia: this.nomeFantasia!,
      valorHora: this.valorHora!,
      celular: this.celular!
    }

    this.professores.push(professor)

    this.salvarLocalStorage()
  }

  salvarLocalStorage(): void{
    let professorString = JSON.stringify(this.professores);

    localStorage.setItem("professores", professorString)
  }

  carregarProfessoresLocalStorage(): Professor[]{
    let professorLocalStogare = localStorage.getItem("materiais");
    if(professorLocalStogare === null){
      return[]
    }

    let professores: Professor[] = JSON.parse(professorLocalStogare);
    return professores
  }
}
