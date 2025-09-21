import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-retangulo',
  imports: [FormsModule],
  templateUrl: './calculadora-retangulo.html',
  styleUrl: './calculadora-retangulo.scss'
})
export class CalculadoraRetangulo {

  base?: number;
  altura?: number;

  somar(): void{
    let calculo = (this.base! * this.altura!) / 2
    alert(`Área do triangulo ${calculo}`)
  }
}
