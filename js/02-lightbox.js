import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const cardsImgGallery = createRenderGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardsImgGallery);
function createRenderGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>`
        })
        .join('')
};
galleryRef.addEventListener('click', onImageClick);
function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return
    };

}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox');
   