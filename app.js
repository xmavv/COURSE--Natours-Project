const link = document.querySelectorAll('.navigation__link');
const popup = document.querySelectorAll('.popup');

link.forEach( e => e.addEventListener('click', () => navToggle = document.getElementById('navi-toggle').checked = false));

popup.addEventListener('click', () => { popup.classlist.add('show') });

document.addEventListener('click', e => {
    
})