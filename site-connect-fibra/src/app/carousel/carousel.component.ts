import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  images: { src: string; position: string; message: string }[] = [
    {
      src: 'assets/images/banners/site.jpg',
      position: 'top center',
      message: 'Olá! Gostaria de participar da promoção da semana do consumidor da  Connect Fibra!'
    },
    {
      src: 'assets/images/banners/Site 2.jpg',
      position: 'top center',
      message: 'Oi! Tenho interesse sobre os planos de GPS'
    },
    {
      src: 'assets/images/banners/banner1.1.jpg',
      position: 'top center',
      message: 'Oi! Tenho interesse na promoção do plano 600 Mega!'
    },
    {
      src: 'assets/images/banners/banner_indicação.jpg',
      position: 'top center',
      message: 'Olá! Quero saber mais sobre o programa "Amigo Indica Amigo"!'
    },
  ];

  currentIndex = 0;
  private intervalId: any;
  private whatsappNumber = '5583991616542';

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  abrirWhatsApp(message: string) {
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
