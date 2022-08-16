import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ImageGallery = document.querySelector(".gallery");
const galleryItem = createImageGallery(galleryItems);
ImageGallery.insertAdjacentHTML("beforeend", galleryItem);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href = "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div > `;
    })
    .join("");
}

ImageGallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${selectedImage}" alt="full-image">
`);

  instance.show();

  ImageGallery.addEventListener("keydown", addEscapeKey) 
  
  function addEscapeKey(event) {
    if (event.key === "Escape") {
      instance.close();
      ImageGallery.removeEventListener("keydown", addEscapeKey);
      console.log("keydown");
    }
  }
    
   
  });

