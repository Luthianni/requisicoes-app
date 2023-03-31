import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import {InputMaskModule} from 'primeng/inputmask';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';

import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/Table/table';

@NgModule({
  imports: [
    CommonModule, ButtonModule,
    FieldsetModule, InputTextareaModule,
    DropdownModule, ConfirmDialogModule,
    CalendarModule, TabViewModule,
    ToggleButtonModule, TableModule,
  ],
  exports: [
    ButtonModule, FieldsetModule,
    InputMaskModule, MessagesModule,
    CheckboxModule, TableModule,
    DialogModule, InputTextareaModule,
    DropdownModule, ConfirmDialogModule,
    CalendarModule, TabViewModule,
    ToggleButtonModule,
  ],
  declarations: []
})
export class PrimeNGModule { }
