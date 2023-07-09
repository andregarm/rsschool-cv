const hamburgerButton = document.querySelector('.hamburger-button');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', function() {
  menu.classList.toggle('show');
});