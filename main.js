const userEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

userEmail.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu() {
    desktopMenu.classList.toggle('inactive');
}