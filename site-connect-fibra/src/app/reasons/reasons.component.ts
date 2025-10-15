import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.css'] 
})
export class ReasonsComponent {
  reasons = [
    { title: 'Qualidade de Serviço', description: 'Oferecemos serviços de internet de alta qualidade, com estabilidade e velocidade garantidas.' },
    { title: 'Suporte 24/7', description: 'Nosso suporte técnico está disponível 24 horas por dia, 7 dias por semana, pronto para atender você.' },
    { title: 'Planos Personalizados', description: 'Oferecemos planos flexíveis que se adaptam às suas necessidades e orçamento.' },
    { title: 'Tecnologia de Ponta', description: 'Utilizamos equipamentos e tecnologias de última geração para garantir a melhor experiência.' }
  ];
}
