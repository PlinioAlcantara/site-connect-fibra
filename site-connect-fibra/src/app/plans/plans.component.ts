import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements AfterViewInit {
  @ViewChildren('planCard') planCards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('animate');
          } else {
            element.classList.remove('animate');
          }
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

  // redireciona diretamente para o chat
  window.location.href = url;
}
}
