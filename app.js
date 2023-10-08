const link = document.querySelectorAll('.navigation__link');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupClose = document.querySelector('.popup__close');
const btnBookNow = document.querySelectorAll('.btn-book-now');

// checkbox hack
link.forEach( e => e.addEventListener('click', () => navToggle = document.getElementById('navi-toggle').checked = false));

//showing popup
btnBookNow.forEach(e => {
    e.addEventListener('click', () => {
        popup.classList.remove('u-display-none-popup');
        popupContent.classList.remove('u-display-none-popup-content');
    })
})

//removing popup
popup.addEventListener('click', () => {
    popup.classList.add('u-display-none-popup');
    popupContent.classList.add('u-display-none-popup-content');
});

popupClose.addEventListener('click', () => {
    popup.classList.add('u-display-none-popup');
    popupContent.classList.add('u-display-none-popup-content');
})

window.addEventListener('keydown', e => {
    if (e.key === 'Escape'){
        popup.classList.add('u-display-none-popup');
        popupContent.classList.add('u-display-none-popup-content');
    }
});

// do not close clicking inside content
popupContent.addEventListener('click', e => e.stopPropagation())