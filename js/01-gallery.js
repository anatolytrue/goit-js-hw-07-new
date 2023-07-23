import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

function createGallery(array) {
    return array
        .map(({original, preview, description}) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`)
        .join("")
}

const result = createGallery(galleryItems)

gallery.insertAdjacentHTML('beforeend', result)

document.addEventListener('click', onClickOpenImage)

function onClickOpenImage(e) {
    e.preventDefault()
    if (e.target.classList.contains('gallery__image')) {
        const instance = basicLightbox.create(
            `<img src="${e.target.dataset.source}" width="800" height="600">`,
            {
                onShow: () => window.addEventListener('keydown', onPressEsc),
                onClose: () => window.removeEventListener('keydown', onPressEsc),
            }
        )
        instance.show()
        function onPressEsc(e) {
            if (e.code === 'Escape') {
                instance.close()
            }
        }
    }
}


