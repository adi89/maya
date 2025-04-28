import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "modalImage"]

  connect() {
    console.log("GalleryController is connected! 🚀");
    // Listen for Escape key when modal is open
    document.addEventListener('keydown', this.handleKeydown);
  }

  disconnect() {
    // Remove the listener when controller is disconnected
    document.removeEventListener('keydown', this.handleKeydown);
  }

  openModal(event) {
    event.preventDefault()  // in case image is within a link, prevent Turbo nav
    this.modalTarget.style.display = "block"
    this.modalImageTarget.src = event.currentTarget.querySelector('img').src
  }

  closeModal() {
    this.modalTarget.style.display = "none"
  }

  handleKeydown = (event) => {
    if (event.key === "Escape" && this.modalTarget.style.display === "block") {
      this.closeModal();
    }
  }

  backgroundClick(event) {
    if (event.target !== event.currentTarget) {
      // Clicked directly on the image → do nothing
      console.log("Click on image. Do Nothing")
      return;
    }

     // Otherwise (clicked outside the image, on background) → close the modal
     console.log("Clicked outside of image. Leave")
     this.closeModal();
  }
}
