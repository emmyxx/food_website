const menuBars = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');

menuBars.addEventListener('click', toggleMenu);

function toggleMenu() {
  navbar.classList.toggle('active');
}
