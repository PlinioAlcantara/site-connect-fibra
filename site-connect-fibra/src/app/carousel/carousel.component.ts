import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {

  images: { src: string; position: string }[] = [
    { src: 'assets/images/sorteio.jpg', position: 'top center' }, 
    { src: 'assets/images/banner1.1.jpg', position: 'top center' }, 
    { src: 'assets/images/banner2.jpg', position: 'top center' }   
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
