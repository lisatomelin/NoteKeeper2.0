import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.scss']
})
export class ExcluirNotaComponent {
  notas$?: Observable<Nota>;

}
