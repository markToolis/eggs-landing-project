let btn = document.querySelector('.menu-btn'),
    menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

