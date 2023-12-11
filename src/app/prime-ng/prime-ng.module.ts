import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DockModule } from 'primeng/dock';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PanelMenuModule,
    DockModule,
    PanelModule,
    ChartModule,
    CardModule,
    ButtonModule,
    DividerModule,
    OrganizationChartModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrimeNgModule { }
