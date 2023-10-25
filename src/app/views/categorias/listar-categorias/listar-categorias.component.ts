import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categorias';
import { Observable, map } from 'rxjs';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent implements OnInit {
  categorias$?: Observable<Categoria[]>;
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.categorias$ = this.route.data.pipe(map((dados) => dados['categorias'])
    );
  }

}
