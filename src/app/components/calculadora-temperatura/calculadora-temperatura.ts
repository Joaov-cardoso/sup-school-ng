import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-temperatura',
  imports: [FormsModule],
  templateUrl: './calculadora-temperatura.html',
  styleUrl: './calculadora-temperatura.scss'
})
export class CalculadoraTemperatura {

  valor?: number;
  resultado?: number;

  calcularKParaF(): void {
    let conversao: number = (this.valor! - 273.15) * 9 / 5 + 32;
    this.resultado = conversao
    alert(`${this.valor} graus Kelvin = ${this.resultado.toFixed(2)} Fahrenheit`)
  }

  calcularFParaK(): void {
    let conversao: number = (this.valor! - 32) * 5/9 + 273.15
    this.resultado = conversao
    alert(`${this.valor} graus Fahrenheit = ${this.resultado.toFixed(2)} Kelvin`)
  }

  calcularKParaC(): void {
    let conversao: number = this.valor! - 273.15
    this.resultado = conversao
    alert(`${this.valor} graus Kelvin = ${this.resultado.toFixed(2)} Celsius`)
  }

  calcularCParaK(): void {
    let conversao: number =  this.valor! + 273.15;
    this.resultado = conversao;
    alert(`${this.valor} graus Celsius = ${this.resultado.toFixed(2)} Kelvin`);
  }

  calcularCParaF(): void {
    let conversao: number = (this.valor! - 32) * 5/9
    this.resultado = conversao;
    alert(`${this.valor} graus Celsius = ${this.resultado.toFixed(2)} Fahrenheit`);
  }

  calcularFParaC(): void {
    let conversao: number = (this.valor! * 9/5) + 32
    this.resultado = conversao;
    alert(`${this.valor} graus Fahrenheit = ${this.resultado.toFixed(2)} Celsius`);
  }
}
