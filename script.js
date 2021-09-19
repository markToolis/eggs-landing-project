let btn = document.querySelector('#trigger'),
    menu = document.querySelector('.menu');
    

btn.addEventListener('click', () => {
    menu.classList.toggle('active');   
});

