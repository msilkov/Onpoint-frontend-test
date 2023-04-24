const sliderWrapper = document.querySelector('.slider__container');
const slides = Array.from(sliderWrapper.querySelectorAll('.slider__slide'));
const buttonTest = sliderWrapper.querySelector('.button');
const slideWidth = 1024;

let currentSlide = 0;
let startPosX = 0;

let isDragging = false;
let touchStartX = 0;

buttonTest.addEventListener('click', function (e) {
  e.preventDefault()
  console.log('run');
});

sliderWrapper.addEventListener('mousedown', function (e) {
  isDragging = true;
  startPosX = e.clientX;
  this.style.cursor = 'grabbing';
});

sliderWrapper.addEventListener('mouseleave', function (e) {
  isDragging = false;
});

sliderWrapper.addEventListener('mouseup', function (e) {
  isDragging = false;
  this.style.cursor = 'grab';
  const scrollLeft = this.scrollLeft;
  const direction = startPosX > e.clientX ? -1 : 1;
  const nextSlide = currentSlide + direction;
  scrollToSlide(nextSlide);
});

sliderWrapper.addEventListener('touchstart', function (e) {
  isDragging = true;
  touchStartX = e.touches[0].clientX;
});

sliderWrapper.addEventListener('touchend', function (e) {
  isDragging = false;
  const touchEndX = e.changedTouches[0].clientX;
  const direction = touchStartX > touchEndX ? -1 : 1;
  const nextSlide = currentSlide + direction;
  scrollToSlide(nextSlide);
});

sliderWrapper.addEventListener('touchmove', function (e) {
  if (!isDragging) {
    return;
  }
  const touchCurrentX = e.touches[0].clientX;
  this.scrollLeft += touchStartX - touchCurrentX;
});

sliderWrapper.addEventListener('mousemove', function (e) {
  if (!isDragging) {
    return;
  }
  this.scrollLeft += startPosX - e.clientX;
});

sliderWrapper.addEventListener('mouseup', function (e) {
  isDragging = false;
});

sliderWrapper.addEventListener('mousedown', function (e) {
  isDragging = true;
  startPosX = e.clientX;
  this.style.cursor = 'grabbing';
});

sliderWrapper.addEventListener('mousemove', function (e) {
  if (!isDragging) {
    return;
  }
  const currentPosX = e.clientX;
  const direction = startPosX > currentPosX ? -1 : 1;
  const nextSlide = currentSlide + direction;
  scrollToSlide(nextSlide);
});

function scrollToSlide(slide) {
  if (slide < 0 || slide >= slides.length) {
    return;
  }
  currentSlide = slide;
  sliderWrapper.scrollTo({
    left: currentSlide * slideWidth,
    behavior: 'smooth'
  });
}
