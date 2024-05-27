const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideMenu = document.querySelector('.product-detail');
const cartbtn = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopmenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartbtn.addEventListener('click', toggleAsideMenu);


function toggleDesktopmenu() {
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed){
        asideMenu.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideMenu() {
    isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    asideMenu.classList.toggle('inactive');
}