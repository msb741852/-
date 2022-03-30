const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navbar_menu');
const navbar = document.querySelector('.navbar');
const icons = document.querySelector('.icons');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    navbar.classList.toggle('active');
})