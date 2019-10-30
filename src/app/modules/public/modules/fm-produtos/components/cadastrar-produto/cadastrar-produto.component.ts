import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  formProduto: FormGroup;

  constructor(
    private produtosService: ProdutosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createFormProduto();
  }

  createFormProduto() {
    this.formProduto = this.formBuilder.group({
      nome: [],
      desc: [],
      categoriasId: [],
      valor: []
    });
  }

  onSubmit() {
    this.produtosService.cadastrar(this.formProduto.getRawValue()).subscribe((res: any) => res);
  }
}
