import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-media',
  imports: [FormsModule],
  templateUrl: './calculadora-media.html',
  styleUrl: './calculadora-media.scss'
})
export class CalculadoraMedia {
  nota1?: number;
  nota2?: number;
  nota3?: number;

  calcularMedia(): void{
    let media = (this.nota1! + this.nota2! + this.nota3!) / 3
    let resultado;

    if (media > 7){
      resultado = "Aprovado"
    }else{
      resultado = "Reprovado"
    }

    alert(`${resultado} com média ${media.toFixed(2)}`)
  }
}
