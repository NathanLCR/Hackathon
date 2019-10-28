import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmCategoriasRoutingModule } from './fm-categorias-routing.module';
import { PesquisarCategoriasComponent } from './components/pesquisar-categorias/pesquisar-categorias.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [
    PesquisarCategoriasComponent,

  ],
  imports: [
    CommonModule,
    FmCategoriasRoutingModule,
    SharedComponentsModule
  ]
})
export class FmCategoriasModule { }
