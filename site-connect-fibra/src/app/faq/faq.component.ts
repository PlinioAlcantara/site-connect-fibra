import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  faqs = [
    {
      pergunta: 'Qual plano é ideal para mim?',
      resposta: 'Para uso residencial, os planos residenciais atendem muito bem. Para empresas, câmeras e maior estabilidade, indicamos os planos empresariais.',
      aberta: false
    },
    {
      pergunta: 'Como emitir a segunda via da fatura?',
      resposta: 'A segunda via pode ser emitida pela Central do Cliente, acessando a opção Financeiro.',
      aberta: false
    },
    {
      pergunta: 'Como alterar a senha da Central do Cliente?',
      resposta: 'Na tela de login da Central do Cliente, clique em “Esqueci minha senha” e siga as instruções.',
      aberta: false
    },
    {
      pergunta: 'Onde fica a unidade mais próxima?',
      resposta: '',
      aberta: false,
      tipo: 'localizacao'
    }
  ];

  agencias = [
    {
      cidade: 'Rio Tinto',
      endereco: 'Praça João Pessoa - Rio Tinto, PB, 58297-000'
    },
    {
      cidade: 'Mamanguape',
      endereco: 'Av. Getúlio Vargas, 68 - Centro, Mamanguape - PB, 58280-000'
    },
    {
      cidade: 'Mataraca',
      endereco: 'PB-065 - Mataraca, PB, 58292-000'
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].aberta = !this.faqs[index].aberta;
  }

  abrirMapa(endereco: string) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
    window.open(url, '_blank');
  }
}
