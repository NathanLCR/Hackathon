import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';

const routes: Routes = [
  {
    path: 'hackathon-unifacisa',
    component: HomeComponent,
    children: [
      {
        path:'',
        component: MenuInicialComponent,
      },
      {
        path: 'contribuintes',
        loadChildren: './modules/fm-contribuintes/fm-contribuintes.module#FmContribuintesModule'
      },
      {
        path: 'produtos',
        loadChildren: './modules/fm-produtos/fm-produtos.module#FmProdutosModule'
      },
      {
        path: 'categorias',
        loadChildren: './modules/fm-categorias/fm-categorias.module#FmCategoriasModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
