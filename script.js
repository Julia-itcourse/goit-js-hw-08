import gallery from "./gallery-items.js"

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector(".js-gallery")

let galleryItems = ""
gallery.forEach(
  (galleryItem) =>
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
`)
)

galleryList.innerHTML = galleryItems

const lightboxElem = document.querySelector(".js-lightbox")
const lightboxImage = document.querySelector(".lightbox__image")
const closeIcon = document.querySelector(".lightbox__button")
const content = document.querySelector(".lightbox__content")

const openLightbox = function (event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") return
  lightboxElem.classList.add("is-open")
  lightboxImage.src = event.target.getAttribute("data-source")
}

const closeLightbox = function () {
  lightboxElem.classList.remove("is-open")
  lightboxImage.src = ""
}

galleryList.addEventListener("click", openLightbox)
closeIcon.addEventListener("click", closeLightbox)

//_______Additional tasks________________

// Закрытие модального окна по нажатию клавиши ESC.

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    lightboxElem.classList.remove("is-open")
  }
})

// Закрытие модального окна по клику.

content.addEventListener("click", (event) => {
  if (event.target.nodeName === "IMG") return
  else {
    closeLightbox()
  }
})

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// const scrollLeft = function () {
//   if (event.key === "ArrowLeft") {
//     imgIndex--
//     if (imgIndex <= 0) {
//       imgIndex = galery.length - 1
//       lightboxImage.src = galery[index].src
//     }
//   }
// }

// const scrollRight = function () {
//   if (event.key === "ArrowRight") {
//     imgIndex--
//     if (imgIndex > 0) {
//       imgIndex = galery.length + 1
//       lightboxImage.src = galery[index].src
//     }
//   }
// }

// window.addEventListener(keydown, scrollRight)
// window.addEventListener(keydown, scrollLeft)
