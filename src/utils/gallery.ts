export function initializeGallery() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement;
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeButton = document.getElementById('close-lightbox');
  const prevButton = document.getElementById('prev-image');
  const nextButton = document.getElementById('next-image');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  let currentIndex = 0;

  function showImage(index: number) {
    const item = galleryItems[index];
    const img = item.querySelector('img');
    if (!img) return;
    
    currentIndex = index;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    
    const caption = item.querySelector('p')?.textContent;
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || '';
    }
    
    setTimeout(() => {
      lightboxImage.classList.add('opacity-100');
    }, 50);
  }

  function openLightbox(index: number) {
    if (!lightbox) return;
    lightbox.classList.remove('hidden');
    setTimeout(() => {
      lightbox.classList.add('opacity-100');
    }, 50);
    showImage(index);
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove('opacity-100');
    lightboxImage.classList.remove('opacity-100');
    setTimeout(() => {
      lightbox.classList.add('hidden');
    }, 300);
  }

  function showNext() {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImage.classList.remove('opacity-100');
    setTimeout(() => {
      showImage(nextIndex);
    }, 300);
  }

  function showPrev() {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImage.classList.remove('opacity-100');
    setTimeout(() => {
      showImage(prevIndex);
    }, 300);
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  closeButton?.addEventListener('click', closeLightbox);
  nextButton?.addEventListener('click', showNext);
  prevButton?.addEventListener('click', showPrev);

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });
}