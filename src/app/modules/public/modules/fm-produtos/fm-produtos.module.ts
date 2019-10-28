import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { ProdutosService } from './services/produtos.service';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { ExibirProdutosComponent } from './components/exibir-produtos/exibir-produtos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PesquisarProdutosComponent, CadastrarProdutoComponent, ExibirProdutosComponent],
  imports: [
    CommonModule,
    FmProdutosRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutosService
  ]
})
export class FmProdutosModule { }
