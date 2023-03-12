// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"


const galeryEl = galleryItems.map(imgOptions => `   
  <a class="gallery__link" href="${imgOptions.original}">
    <img
      class="gallery__image"
      src="${imgOptions.preview}"
      href="${imgOptions.original}"
      alt="${imgOptions.description}"
    />
  </a>
</li>`
)

const divElement = document.querySelector(".gallery");
divElement.insertAdjacentHTML("afterbegin", galeryEl.join(""))

let gallery = new SimpleLightbox('.gallery a');

gallery.defaultOptions.captions = true;
gallery.defaultOptions.captionsData = "alt";
gallery.defaultOptions.captionDelay = 250;


// console.log(galleryItems);
// console.log(SimpleLightbox)
