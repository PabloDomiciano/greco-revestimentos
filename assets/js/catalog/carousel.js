// Product Gallery Slider
class ProductGallery {
  constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll(".gallery-slide");
    this.thumbnails = document.querySelectorAll(".thumbnail");
    this.prevBtn = document.querySelector(".gallery-prev");
    this.nextBtn = document.querySelector(".gallery-next");

    this.init();
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    this.thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => this.goToSlide(index));
    });
  }

  goToSlide(index) {
    this.slides[this.currentSlide].classList.remove("active");
    this.thumbnails[this.currentSlide].classList.remove("active");

    this.currentSlide = index;

    this.slides[this.currentSlide].classList.add("active");
    this.thumbnails[this.currentSlide].classList.add("active");
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }
}

// Initialize gallery when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ProductGallery();
});
