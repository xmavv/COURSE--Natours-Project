const link = document.querySelectorAll('.navigation__link');

link.forEach( e => {
    e.addEventListener('click', () => {
        const navToggle = document.getElementById('navi-toggle').checked = false;
    });
})