import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categorias';
import { Observable } from 'rxjs';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent implements OnInit {
  categorias$?: Observable<Categoria[]>;
  
  constructor(private categoriasService: CategoriasService){}

  ngOnInit(): void {
    this.categorias$ = this.categoriasService.selecionarTodos();
  }

}
