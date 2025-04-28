// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


document.addEventListener('turbo:load', function() {
  var modal = document.getElementById('photoModal');
  var modalImg = document.getElementById('modalImage');
  var closeBtn = document.querySelector('.modal-close');

  if (modal && modalImg && closeBtn) { // make sure modal exists on the page
    document.querySelectorAll('.gallery-item img').forEach(function(img) {
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
      });
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
