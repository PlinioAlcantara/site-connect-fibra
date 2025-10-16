import { Component } from '@angular/core';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.css']
})
export class ReasonsComponent {
  reasons = [
    {
      icon: '⚡',
      title: 'Conexão Ultrarrápida',
      description: 'Navegue, assista e jogue sem interrupções com nossa fibra de alta performance.'
    },
    {
      icon: '🔒',
      title: 'Segurança e Estabilidade',
      description: 'Tecnologia de ponta para garantir conexões seguras e estáveis 24h por dia.'
    },
    {
      icon: '🤝',
      title: 'Atendimento Humanizado',
      description: 'Equipe preparada para te atender com rapidez, empatia e eficiência.'
    },
    {
      icon: '🌎',
      title: 'Cobertura em Expansão',
      description: 'Estamos constantemente conectando novas regiões, levando mais fibra até você.'
    }
  ];
}
