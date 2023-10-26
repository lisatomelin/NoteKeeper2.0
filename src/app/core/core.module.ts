import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellModule } from './shell/shell.module';
import { NotificationsModule } from './notifications/notifications.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, ShellModule, NotificationsModule],
  exports: [ShellModule]
})
export class CoreModule { }
