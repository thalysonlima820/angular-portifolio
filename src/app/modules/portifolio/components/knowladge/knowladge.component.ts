import { Component, signal } from '@angular/core';
import { iknowlwdge } from '../../interface/iknowlwdge.interface';

@Component({
  selector: 'app-knowladge',
  standalone: true,
  imports: [],
  templateUrl: './knowladge.component.html',
  styleUrl: './knowladge.component.scss'
})
export class KnowladgeComponent {
  public arrayKnowledge = signal<iknowlwdge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de nodejs',
    },
  ])
}
