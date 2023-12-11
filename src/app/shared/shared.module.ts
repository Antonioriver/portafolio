import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DockComponent } from './components/dock/dock.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChartComponent } from './components/chart/chart.component';
import { CardComponent } from './components/card/card.component';
import { DividerComponent } from './components/divider/divider.component';
import { ButtonComponent } from './components/button/button.component';
import { OrganizationChartComponent } from './components/organization-chart/organization-chart.component';
import { BasicCardComponent } from './components/basic-card/basic-card.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputTextAreaComponent } from './components/input-text-area/input-text-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PanelMenuComponent,
    DockComponent,
    FooterComponent,
    ChartComponent,
    CardComponent,
    DividerComponent,
    ButtonComponent,
    OrganizationChartComponent,
    BasicCardComponent,
    InputTextComponent,
    InputTextAreaComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PanelMenuComponent,
    DockComponent,
    FooterComponent,
    ChartComponent,
    CardComponent,
    DividerComponent,
    ButtonComponent,
    OrganizationChartComponent,
    BasicCardComponent,
    InputTextComponent,
    InputTextAreaComponent
  ]
})
export class SharedModule { }
