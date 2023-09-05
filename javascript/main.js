const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const navBurgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const navCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector('.shopping-cart-container')

const productDetail = document.querySelector('#productDetail')
const productClose = document.querySelector('.product-detail-close')

navEmail.addEventListener('click', toggleDesktopMenu) 
navBurgerMenu.addEventListener('click', toggleMobileMenu)
navCarrito.addEventListener('click', toggleShoppingCart)
productClose.addEventListener('click', toggleProductDetail)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
    productDetail.classList.add('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingCart.classList.add('inactive')
    productDetail.classList.add('inactive')
}

function toggleShoppingCart() {
    shoppingCart.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
}
function toggleProductDetail() {
    productDetail.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    shoppingCart.classList.add('inactive')
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120.,
    image: "../img/product_yardSale/bike.jpg",
})
productList.push({
    name: 'Bike',
    price: 120.,
    image: "../img/product_yardSale/bike.jpg",
})
productList.push({
    name: 'Bike',
    price: 120.,
    image: "../img/product_yardSale/bike.jpg",
})
productList.push({
    name: 'Bike',
    price: 120.,
    image: "../img/product_yardSale/bike.jpg",
})
productList.push({
    name: 'Bike',
    price: 120.,
    image: "../img/product_yardSale/bike.jpg",
})
productList.push({
    name: 'Bike',
    price: 120.,
    image: "../img/product_yardSale/bike.jpg",
})

for (product of productList){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    

    const img = document.createElement('img')
    img.classList.add('product-img')
    img.setAttribute('src', product.image)
    img.addEventListener('click', toggleProductDetail)

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    const productInfoDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.classList.add('product-price')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.classList.add('product-name')
    productName.innerText = product.name


    const productInfoFigure = document.createElement('figure')
    const productInfoFigureImg = document.createElement('img')
    productInfoFigureImg.classList.add('product-cart')
    productInfoFigureImg.setAttribute('src', '../img/icon_yardSale/Platzi_YardSale_Icons/bt_add_to_cart.svg')


    const cardContainer = document.querySelector('.cards-container')

    productCard.append(img, productInfo)
    productInfo.append(productInfoDiv, productInfoFigure)
    productInfoDiv.append(productPrice, productName)
    productInfoFigure.append(productInfoFigureImg)
    cardContainer.append(productCard)

    

}