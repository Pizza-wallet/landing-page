// enable hidden nav bar

const nav = document.querySelector('.header')
let lastScrollY = window.scrollY


// if (window.matchMedia("(min-width: 700px)").matches){

// }
window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('nav--hidden')

    }
    else if (lastScrollY = window.scrollY) {
        nav.classList.remove('nav--hidden')
        nav.classList.add('nav--background')
    }
    else{
        nav.classList.remove('nav--background')
    }

    lastScrollY = window.scrollY
})


// Menu

const toggleMenu = document.querySelector('.toggle__menu')
const sideMenu = document.querySelector('.side__menu')
const sideMenuClose = document.querySelector('.side__menu-close')

toggleMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('visible')
})

sideMenu.addEventListener('click', ()=> {
    sideMenu.classList.remove('visible')
})


// function showCard() {
//   var card = document.getElementById("onclick__card");
//   if (card.style.display === "none") {
//     card.style.display = "block";
//   } else {
//     card.style.display = "none";
//   }
// }




const card = document.querySelector('#onclick__card')
const button = document.querySelector('.pushable')
const button2 = document.querySelector('#pushable2')

const close = document.querySelector('.side_bar-close')
const main = document.querySelector('.main')


button.addEventListener('click', () => {
    card.classList.toggle('visible')
    main.classList.toggle('visible')

})
button2.addEventListener('click', ()=> {
    card.classList.toggle('visible')
    main.classList.toggle('visible')

})



close.addEventListener('click', () => {
    card.classList.remove('visible')
    main.classList.remove('visible')

})
























