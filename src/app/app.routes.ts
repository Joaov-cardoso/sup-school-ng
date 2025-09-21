import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { ListaPessoas } from './components/lista-pessoas/lista-pessoas';
import { CalculadoraRetangulo } from './components/calculadora-retangulo/calculadora-retangulo';
import { CalculadoraMedia } from './components/calculadora-media/calculadora-media';
import { CalculadoraTemperatura } from './components/calculadora-temperatura/calculadora-temperatura';

export const routes: Routes = [
    { path: "calculadora", component: Calculadora },
    { path: "lista-pessoas", component: ListaPessoas },
    { path:"calculadora-retangulo", component: CalculadoraRetangulo },
    { path: "calculadora-media", component: CalculadoraMedia},
    { path: "calculadora-temperatura", component: CalculadoraTemperatura}
];
//SPA: Single Page Application
