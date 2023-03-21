var images = document.querySelectorAll('.slider img');
var currentImageIndex = 0;
var touchStartX = 0;
var touchEndX = 0;
var interval = setInterval(nextImage, 2000);

function nextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  if (touchEndX < touchStartX) {
    // Swipe left
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  } else if (touchEndX > touchStartX) {
    // Swipe right
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].classList.add('active');
  }
  touchStartX = 0;
  touchEndX = 0;
}

// Add event listeners
var slider = document.querySelector('.slider');
slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);

// Pause slideshow on mouseover
slider.addEventListener('mouseover', function() {
  clearInterval(interval);
});

// Restart slideshow on mouseout
slider.addEventListener('mouseout', function() {
  interval = setInterval(nextImage, 5000);
});
