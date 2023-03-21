var images = document.querySelectorAll('.slider img');
var currentImageIndex = 0;
var interval = setInterval(nextImage, 5000);

function nextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

// Pause slideshow on mouseover
var slider = document.querySelector('.slider');
slider.addEventListener('mouseover', function() {
  clearInterval(interval);
});

// Restart slideshow on mouseout
slider.addEventListener('mouseout', function() {
  interval = setInterval(nextImage, 5000);
});
