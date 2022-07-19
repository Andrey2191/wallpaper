let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-info-item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

// ------------------------------------------------------------------------------
let yearIndex = 1;
function plusYear() {
  activeYear((yearIndex += 1));
}

function minusYear() {
  activeYear((yearIndex -= 1));
}

function currentYear(n) {
  activeYear((yearIndex = n));
}

function activeYear(n) {
  let i;

  let years = document.getElementsByClassName("slider-year-item");

  if (n > years.length) {
    yearIndex = 1;
  }

  if (n < 1) {
    yearIndex = years.length;
  }

  for (i = 0; i < years.length; i++) {
    years[i].className = years[i].className.replace(" year-active", "");
  }

  years[yearIndex - 1].className += " year-active";
}
