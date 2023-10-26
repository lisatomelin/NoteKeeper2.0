import { Component, OnInit } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Nota } from '../models/nota';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/notifications/services/notifications.service';
import { NotasService } from '../services/notas.service';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.scss']
})
export class ExcluirNotaComponent implements OnInit {
  notas$?: Observable<Nota>;

  constructor(
    private notasService: NotasService,
    private notification: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
     this.notas$ = this.route.data.pipe(map((dados) => dados['nota']));
  }

  excluir(){
    this.route.paramMap
    .pipe(
      map((params) => parseInt(params.get('id')!)),
      switchMap((id) => this.notasService.excluir(id))
    )
    .subscribe({
      next: () => this.processarSucesso(),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso() {
    this.notification.sucesso(`A nota foi excluída com sucesso!`);

    this.router.navigate(['/notas', 'listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }
}  


