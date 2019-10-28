import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmCategoriasRoutingModule } from './fm-categorias-routing.module';
import { PesquisarCategoriasComponent } from './components/pesquisar-categorias/pesquisar-categorias.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { CategoriasService } from './services/categorias.service';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PesquisarCategoriasComponent,
    CadastrarCategoriaComponent,

  ],
  imports: [
    CommonModule,
    FmCategoriasRoutingModule,
    SharedComponentsModule,

  ],
  providers: [
    CategoriasService
  ]
})
export class FmCategoriasModule { }
