import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector('.gallery');
const cardsImgGallery = createRenderGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardsImgGallery);
function createRenderGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>
            </div>`
        })
        .join('')
};
galleryRef.addEventListener('click', onImageClick);
function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return
    };
    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}"> width = "800" height = "600"
    `);
    instance.show();
    console.log(event);
};
function onOpenModal(evt) {
    const instance = basicLightbox.create(`
    <img src=${imgUrl}>`);
    instance.show();
    document.addEventListener('keydown', OnModalClose);
    instance.close()
}



// console.log(cardsListMarkap);
// galleryRef.addEventListener('click', onImgClick);
// function onImgClick(evt) {
//     evt.preventDefault();
//     if (!evt.target.classList.contains('gallery__image')) {
//         return
//     };
//     const imgUrl = evt.target.dataset.source;
//     onOpenModal(imgUrl);
// };
// function onOpenModal(evt) {
//     const instance = basicLightbox.create(`
//     <img src=${imgUrl}>`);
//     instance.show();
//     document.addEventListener('keydown', OnModalClose);
//     instance.close()
// }
  

