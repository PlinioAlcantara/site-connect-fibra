import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuOpen = false;
  isModalOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onNavClick(event: Event, sectionId: string) {
    event.preventDefault(); // 🔥 impede o pulo para o topo

    this.closeMenu();

    if (sectionId.toLowerCase() === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = '';
  }

  download(filename: string) {
    const link = document.createElement('a');
    link.href = `assets/docs/${filename}`;
    link.target = '_blank';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.closeModal();
  }

  @HostListener('window:keydown.esc')
  onEsc() {
    if (this.isModalOpen) this.closeModal();
  }
}
