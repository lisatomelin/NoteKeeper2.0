import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOverDirective } from './directives/card-hover.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [CardOverDirective],
  imports: [],
  exports: [CommonModule,
    ReactiveFormsModule,
    CardOverDirective, 
    MatCardModule, 
    MatIconModule, 
    MatButtonModule, 
    MatListModule, 
    MatTooltipModule, 
    MatInputModule,
    MatChipsModule],
})
export class SharedModule { }
