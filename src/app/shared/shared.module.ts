import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOverDirective } from './directives/card-hover.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [CardOverDirective],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatTooltipModule, MatInputModule],
  exports: [CardOverDirective, MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatTooltipModule, MatInputModule],
})
export class SharedModule { }
