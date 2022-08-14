import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ImageGallery = document.querySelector(".gallery");
const galleryItem = createImageGallery(galleryItems);
ImageGallery.insertAdjacentHTML("beforeend", galleryItem);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
