const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const thumbnails = document.querySelectorAll('.thumb');

let currentIndex = 0;

thumbnails.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(index);
    lightbox.style.display = 'flex';
  });
});

function showImage(index) {
  const src = thumbnails[index].getAttribute('src');
  const alt = thumbnails[index].getAttribute('alt');
  
  lightboxImage.setAttribute('src', src);
  document.getElementById('lightbox-caption').textContent = alt;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  showImage(currentIndex);
}
function filterImages(category) {
  thumbnails.forEach((img) => {
    const imageCategory = img.getAttribute('data-category');
    if (category === 'all' || imageCategory === category) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

document.addEventListener('keydown', function(e) {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  }
});
