import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.scss'
})
export class Calculadora {

  numero1?: number; // ? diz que é null, pode nao existir
  numero2?: number;

  // void quer dizer que é uma função que nao tem retorno
  somar(): void {
    let soma: number = this.numero1! + this.numero2! //this é para puxar de uma varivável de fora da função // ! diz que neste cenário ela vai começar a ter valor definido
    alert(`Soma: ${soma}`)
  }

}
