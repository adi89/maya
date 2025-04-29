import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["logo"]

  connect() {
    this.toggleLogo();
    window.addEventListener('scroll', this.toggleLogo.bind(this));
  }

  disconnect() {
    window.removeEventListener('scroll', this.toggleLogo.bind(this));
  }

  toggleLogo() {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const heroBottom = heroSection.getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
      // Scrolled past hero
      this.logoTarget.style.opacity = "1";
    } else {
      // Still over hero
      this.logoTarget.style.opacity = "0";
    }
  }
}