import gallery from "./gallery-items.js"

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryList = document.querySelector(".js-gallery")
let imgIndex
const createGalleryItems = function (items) {
  let index = 0

  return items.reduce((acc, galleryItem) => {
    acc += `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${galleryItem.original}"
  >
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
      data-index="${index}"

    />
  </a>
</li>
`
    index += 1
    return acc
  }, "")
}

galleryList.innerHTML = createGalleryItems(gallery)

const lightboxElem = document.querySelector(".js-lightbox")
const lightboxImage = document.querySelector(".lightbox__image")
const closeIcon = document.querySelector(".lightbox__button")
const content = document.querySelector(".lightbox__content")

const openLightbox = function (event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") return
  lightboxElem.classList.add("is-open")
  lightboxImage.src = event.target.dataset.source

  imgIndex = +event.target.dataset.index
  window.addEventListener("keydown", scrollRight)
  window.addEventListener("keydown", scrollLeft)
}

const closeLightbox = function () {
  lightboxElem.classList.remove("is-open")
  lightboxImage.src = ""
  window.removeEventListener("keydown", scrollRight)
  window.removeEventListener("keydown", scrollLeft)
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

const scrollLeft = function () {
  if (event.key === "ArrowLeft") {
    imgIndex--
    if (imgIndex < 0) {
      imgIndex = gallery.length - 1
      lightboxImage.src = gallery[imgIndex].original
    } else {
      lightboxImage.src = gallery[imgIndex].original
    }
  }
}

const scrollRight = function () {
  if (event.key === "ArrowRight") {
    imgIndex++
    if (imgIndex > gallery.length - 1) {
      imgIndex = 0
      lightboxImage.src = gallery[imgIndex].original
    } else {
      lightboxImage.src = gallery[imgIndex].original
    }
  }
}
console.log(gallery[0])
