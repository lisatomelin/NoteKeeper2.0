import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriasService } from '../services/categorias.service';
import { Categoria } from '../models/categorias';
import { NotificationService } from 'src/app/core/notifications/services/notifications.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: [''],
    });

    const categoria = this.route.snapshot.data['categoria'];
    this.form.patchValue(categoria);
  }

  gravar(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriasService.editar(id, this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Categoria) {
    this.notification.sucesso(
      `A categoria ${res.titulo} foi editada com sucesso!`),

    this.router.navigate(['/categorias', 'listar']);
  }

  processarFalha(err:any){
    this.notification.erro(
      `A categoria ${err.titulo} não foi editada!`
    );
    console.error('Erro:', err);
  }

  

 
}
