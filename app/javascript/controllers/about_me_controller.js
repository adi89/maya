import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["container"]

  flicker() {
    console.log("flicker triggered")
    this.containerTarget.classList.add("flicker-mode")
    setTimeout(() => {
      this.containerTarget.classList.remove("flicker-mode")
    }, 500)
  }
}
