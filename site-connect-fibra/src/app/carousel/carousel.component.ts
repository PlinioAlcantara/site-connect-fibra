import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/banner1.jpg',   // você sempre conectado
    'assets/images/banner2.jpg',   // amigo indica amigo
    'assets/images/banner3.jpg'    // pais conectados
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // troca a cada 5 segundos
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
