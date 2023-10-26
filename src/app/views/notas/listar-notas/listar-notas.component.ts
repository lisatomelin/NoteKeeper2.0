import { Component, OnInit } from '@angular/core';
import { Nota } from '../models/nota';
import { Observable, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.scss']
})
export class ListarNotasComponent implements OnInit {
  notas$?: Observable<Nota[]>;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.notas$ = this.route.data.pipe(map((dados)=> dados ['notas']));
  }

}
