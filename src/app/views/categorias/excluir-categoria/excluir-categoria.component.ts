import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Categoria } from '../models/categorias';
import { CategoriasService } from '../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.scss']
})
export class ExcluirCategoriaComponent implements OnInit {
  categoria$?: Observable<Categoria>

  constructor(private categoriasService: CategoriasService, 
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.categoria$ = this.route.data.pipe(map((res) => res['categoria']));
  }

  confirmar(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriasService.excluir(id).subscribe({
      next: () => this.processarSucesso(),
       error: (err) => this.processarFalha(err),
    });

    
  }

  processarSucesso(){
    this.router.navigate(['/categorias', 'listar']);
  }

  processarFalha(err:any){
    console.error('Erro:', err);
  }

}
