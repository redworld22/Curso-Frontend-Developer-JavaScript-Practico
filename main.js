const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailClose = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartDetail = document.querySelector('#shoppingCartDetail');
const productDetailContainer = document.querySelector('#productDetail');
const cartbtn = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopmenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartbtn.addEventListener('click', toggleAsideMenu);
productDetailClose.addEventListener('click', closeProductDetail)


function toggleDesktopmenu() {
    const isAsideMenuClosed = shoppingCartDetail.classList.contains('inactive');

    if(!isAsideMenuClosed){
        shoppingCartDetail.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClosed = shoppingCartDetail.classList.contains('inactive');

    if(!isAsideMenuClosed){
        shoppingCartDetail.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideMenu() {
    isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartDetail.classList.toggle('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
};

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
};

productList = [];

productList.push({
    name: 'Bike',
    price: 520.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Laptop',
    price: 750.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Smart Tv',
    price: 640.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for (product of productList) {
    const productCardDiv = document.createElement('div');
    productCardDiv.classList.add('product-card');

    const imageProduct = document.createElement('img');
    imageProduct.setAttribute('src', product.image);
    imageProduct.addEventListener('click', openProductDetailAside);

    const productInfoDiv = document.createElement('div');
    productInfoDiv.classList.add('product-info');

    const divInProductInfo = document.createElement('div');

    const priceInfo = document.createElement('p');
    priceInfo.innerHTML = '$' + product.price;

    const nameInfo = document.createElement('p');
    nameInfo.innerHTML = product.name;

    const figureCart = document.createElement('figure');
    const imageCart = document.createElement('img');
    imageCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

    figureCart.appendChild(imageCart);

    divInProductInfo.appendChild(nameInfo);
    divInProductInfo.appendChild(priceInfo);

    productInfoDiv.appendChild(divInProductInfo);
    productInfoDiv.appendChild(figureCart);

    productCardDiv.appendChild(imageProduct);
    productCardDiv.appendChild(productInfoDiv);

    cardsContainer.appendChild(productCardDiv);
};

