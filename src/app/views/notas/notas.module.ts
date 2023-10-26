import { NgModule } from '@angular/core';
import { NotasRoutingModule } from './notas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { InserirNotaComponent } from './inserir-nota/inserir-nota.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ExcluirNotaComponent } from './excluir-nota/excluir-nota.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { CategoriasModule } from '../categorias/categorias.module';
import { NotasService } from './services/notas.service';

@NgModule({
  declarations: [
    ListarNotasComponent,
    InserirNotaComponent,
    ExcluirNotaComponent,
    EditarNotaComponent
  ],
  imports: [    
    NotasRoutingModule,
    SharedModule,
    CategoriasModule, 
    MatRadioModule,
    MatSelectModule,  
  ],
  providers: [NotasService]
})
export class NotasModule { }
