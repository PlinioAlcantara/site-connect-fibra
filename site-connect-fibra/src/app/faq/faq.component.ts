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
      resposta: 'Se você usa internet para redes sociais, streaming e estudos, os planos residenciais atendem bem. Para empresas, sistemas, câmeras ou uso intenso, recomendamos os planos empresariais com IP fixo.',
      aberta: false
    },
    {
      pergunta: 'Como emitir a segunda via da fatura?',
      resposta: 'A segunda via pode ser emitida diretamente pela Central do Cliente. Basta acessar com seu login e senha e escolher a opção “Financeiro”.',
      aberta: false
    },
    {
      pergunta: 'Como alterar a senha da Central do Cliente?',
      resposta: 'Na tela de login da Central do Cliente, clique em “Esqueci minha senha” e siga as instruções enviadas para seu e-mail ou WhatsApp cadastrado.',
      aberta: false
    },
    {
      pergunta: 'Onde encontro a unidade mais próxima?',
      resposta: 'Você pode consultar nossos endereços e horários de atendimento entrando em contato pelo WhatsApp ou pela Central do Cliente.',
      aberta: false
    },
    {
      pergunta: 'Como falar com o suporte técnico?',
      resposta: 'Nosso suporte está disponível via WhatsApp e pela Central do Cliente. Em caso de instabilidade, nossa equipe está pronta para ajudar.',
      aberta: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].aberta = !this.faqs[index].aberta;
  }
}
