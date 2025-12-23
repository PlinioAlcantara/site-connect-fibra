import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlansComponent } from './plans/plans.component';
import { ReasonsComponent } from './reasons/reasons.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    PlansComponent,
    ReasonsComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
