const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});