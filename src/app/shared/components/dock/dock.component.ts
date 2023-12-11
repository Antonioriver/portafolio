import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit{
  public items: MenuItem[] =[];

  position: string = 'top';

  positionOptions = [
      {
          label: 'Bottom',
          value: 'bottom'
      },
      {
          label: 'Top',
          value: 'top'
      },
      {
          label: 'Left',
          value: 'left'
      },
      {
          label: 'Right',
          value: 'right'
      }
  ];

  ngOnInit() {
      this.items = [
          {
              label: 'Inicio',
              icon: './assets/images/inicio.png',
              routerLink:'inicio'
          },
          {
              label: 'Proyectos',
              icon: './assets/images/proyectos.png',
              routerLink:'proyectos'
          },
          {
              label: 'Habilidades',
              icon: './assets/images/habilidades.png',
              routerLink:'habilidades'
          },
          {
              label: 'Experiencia',
              icon: './assets/images/experiencia.png',
              routerLink:'experiencia'
          },
          {
            label: 'Contacto',
            icon: './assets/images/contacto.png',
            routerLink:'contacto'
        }
      ];
  }
}
