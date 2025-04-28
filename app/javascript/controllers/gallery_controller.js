import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "modalImage"]

  openModal(event) {
    event.preventDefault()  // in case image is within a link, prevent Turbo nav
    this.modalTarget.style.display = "block"
    this.modalImageTarget.src = event.currentTarget.src
  }

  closeModal() {
    this.modalTarget.style.display = "none"
  }
}
