function toggleMenu() {
    var menu = document.getElementById('navbar-links');
    var icon=document.getElementById("menu-icon");
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    } else {
        menu.style.display = 'flex';
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark')
    }
}





let scroll = document.getElementById("scroll");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

const scrollAmount = 350;

rightBtn.addEventListener("click", () => {
    scroll.scrollBy({ left: scrollAmount, behavior: "smooth"});
});

leftBtn.addEventListener("click", () => {
    scroll.scrollBy({ left: -scrollAmount, behavior: "smooth"});
});



// section-5 js

let scroll1 = document.getElementById("scroll1");
let leftBtn1 = document.getElementById("leftBtn1");
let rightBtn1 = document.getElementById("rightBtn1");

let scrollAmount1 = 350;

rightBtn1.addEventListener("click", () => {
    scroll1.scrollBy({ left: scrollAmount, behavior: "smooth"});
});

leftBtn1.addEventListener("click", () => {
    scroll1.scrollBy({ left: -scrollAmount, behavior: "smooth"});
});