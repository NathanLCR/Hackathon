import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarCategoriasComponent } from './components/pesquisar-categorias/pesquisar-categorias.component';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisarCategoriasComponent
  },
  {
    path: 'cadastro',
    component: CadastrarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmCategoriasRoutingModule { }
