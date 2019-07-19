window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#menu-toggle');
  const menu = document.querySelector('.pokedex');

  button.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  menu.addEventListener('click', () => {
    menu.classList.toggle('show');
  });
});