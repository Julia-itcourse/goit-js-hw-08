import gallery from './gallery-items.js';

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector('.js-gallery');

let galleryItems = '';
gallery.forEach(
  galleryItem =>
    (galleryItems += `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${galleryItem.original}"
  >
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>
`),
);

galleryList.innerHTML = galleryItems;

const lightboxElem = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeIcon = document.querySelector('.lightbox__button');
const overlay = document.querySelector('.lightbox__overlay');

const openLightbox = function (event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  // console.log(event.target.getAttribute('data-source'));
  lightboxElem.classList.add('is-open');
  lightboxImage.src = event.target.getAttribute('data-source');
};

const closeLightbox = function () {
  lightboxElem.classList.remove('is-open');
  lightboxImage.src = '';
};

galleryList.addEventListener('click', openLightbox);
closeIcon.addEventListener('click', closeLightbox);

//_______Additional tasks________________

// Закрытие модального окна по нажатию клавиши ESC.

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    lightboxElem.classList.remove('is-open');
  }
});

//? не работает Закрытие модального окна по клику на div.lightbox__overlay.

overlay.addEventListener('click', closeLightbox);

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

//* just some ideas on logic on gallery scroll
const scrollRight = function (event) {
  for (
    let currentSlideIndex = 0;
    currentSlideIndex < gallery.length;
    currentSlideIndex++
  ) {}
};
const scrollLeft = function (event) {
  for (
    let currentSlideIndex = 0;
    currentSlideIndex < gallery.length;
    currentSlideIndex--
  ) {}
};

window.addEventListener(keydown, scrollRight);
window.addEventListener(keydown, scrollLeft);
