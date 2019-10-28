import { Component, OnInit } from '@angular/core';
import { CategoriasModel } from '../../models/categorias-model';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-pesquisar-categorias',
  templateUrl: './pesquisar-categorias.component.html',
  styleUrls: ['./pesquisar-categorias.component.css']
})
export class PesquisarCategoriasComponent implements OnInit {

  categorias: CategoriasModel[] = [];

  constructor(
    private categoriasService: CategoriasService
  ) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(listaCategorias => { this.categorias = listaCategorias; }
    );
  }

}
