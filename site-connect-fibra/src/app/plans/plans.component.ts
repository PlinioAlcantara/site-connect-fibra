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
            // Quando sai da tela, remove para permitir repetir
            element.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 } // ativa quando 30% do card estiver visível
    );

    this.planCards.forEach(card => observer.observe(card.nativeElement));
  }
}

  


