import { Routes } from '@angular/router';
import { Calculadora } from './components/calculadora/calculadora';
import { ListaPessoas } from './components/lista-pessoas/lista-pessoas';
import { CalculadoraRetangulo } from './components/calculadora-retangulo/calculadora-retangulo';
import { CalculadoraMedia } from './components/calculadora-media/calculadora-media';
import { CalculadoraTemperatura } from './components/calculadora-temperatura/calculadora-temperatura';
import { ListaAlunos } from './components/lista-alunos/lista-alunos';
import { CadastroAluno } from './components/cadastro-aluno/cadastro-aluno';
import { ListaTurmas } from './components/lista-turmas/lista-turmas';
import { CadastroTurma } from './components/cadastro-turma/cadastro-turma';
import { CadastroMateria } from './components/cadastro-materia/cadastro-materia';
import { ListaMaterias } from './components/lista-materias/lista-materias';
import { ListaProfessores } from './components/lista-professores/lista-professores';
import { CadastroProfessor } from './components/cadastro-professor/cadastro-professor';

export const routes: Routes = [
    { path: "calculadora", component: Calculadora },
    { path: "lista-pessoas", component: ListaPessoas },
    { path: "calculadora-retangulo", component: CalculadoraRetangulo },
    { path: "calculadora-media", component: CalculadoraMedia },
    { path: "calculadora-temperatura", component: CalculadoraTemperatura },
    { path: "alunos", component: ListaAlunos },
    { path: "alunos/cadastro", component: CadastroAluno },
    { path: "alunos/editar/:id", component: CadastroAluno },


    { path: "turma", component: ListaTurmas },
    { path: "turma/cadastro", component: CadastroTurma },
    { path: "materias", component: ListaMaterias },
    { path: "materias/cadastro", component: CadastroMateria },
    { path: "professores", component: ListaProfessores },
    { path: "professores/cadastro", component: CadastroProfessor }
];
//SPA: Single Page Application
