import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisarCategoriasComponent } from './components/pesquisar-categorias/pesquisar-categorias.component';

const routes: Routes = [
  {
    path:'',
    component: PesquisarCategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmCategoriasRoutingModule { }
