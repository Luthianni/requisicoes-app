import { DepartamentoComponent } from './departamento.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [DepartamentoComponent],

  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DepartamentoRoutingModule,
    FormsModule,
    DepartamentoComponent,
    DialogModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DepartamentoModule { }
