import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasModel } from '../models/categorias-model';

@Injectable()
export class CategoriasServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getCategorias(): Observable<CategoriasModel[]> {
    return this.http.get<CategoriasModel[]>('http://localhost:3000/categorias');
  }
}
