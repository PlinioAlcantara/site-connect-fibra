import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements AfterViewInit {

  tipoPlano: 'residencial' | 'empresarial' = 'residencial';

  @ViewChildren('planCard') planCards!: QueryList<ElementRef>;

  selecionarPlano(tipo: 'residencial' | 'empresarial') {
    this.tipoPlano = tipo;
    setTimeout(() => this.observarAnimacoes(), 50);
  }

  ngAfterViewInit() {
    this.observarAnimacoes();
  }

  observarAnimacoes() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target as HTMLElement;
          entry.isIntersecting
            ? el.classList.add('animate')
            : el.classList.remove('animate');
        });
      },
      { threshold: 0.3 }
    );

    this.planCards.forEach(card => observer.observe(card.nativeElement));
  }

  abrirWhatsApp(plano: string) {
    const numero = '5583991616542';
    const mensagem = `Olá! Gostaria de contratar o plano ${plano} da Connect Fibra.`;
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
  }
}
