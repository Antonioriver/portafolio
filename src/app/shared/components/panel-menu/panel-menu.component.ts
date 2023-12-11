import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css']
})
export class PanelMenuComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label: 'Inicio',
              icon: 'pi pi-fw pi-file',
          },
          {
              label: 'Proyectos',
              icon: 'pi pi-fw pi-pencil',
          },
          {
              label: 'Habilidades',
              icon: 'pi pi-fw pi-user',
          },
          {
              label: 'Experiencia',
              icon: 'pi pi-fw pi-calendar',
          },
          {
            label: 'Contacto',
            icon: 'pi pi-fw pi-user',
        },
      ];
  }
}
