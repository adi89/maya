import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["logo"]

  connect() {
    console.log("NavbarController connected 🚀");
    this.toggleLogo();
    window.addEventListener('scroll', this.toggleLogo.bind(this));
  }

  disconnect() {
    window.removeEventListener('scroll', this.toggleLogo.bind(this));
  }

  toggleLogo() {
    console.log("toggleLogo called 🚀");
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const heroBottom = heroSection.getBoundingClientRect().bottom;
    console.log("Hero bottom:", heroBottom);
    if (heroBottom <= 0) {
      // Scrolled past hero
      this.logoTarget.style.opacity = "1";
    } else {
      // Still over hero
      this.logoTarget.style.opacity = "0";
    }
  }
}