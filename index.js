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


// Side-Menu
const toggleMenu = document.querySelector('.toggle__menu')
const sideMenu = document.querySelector('.side__menu')
const sideMenuClose = document.querySelector('.side__menu-close')

toggleMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('visible')
})

sideMenu.addEventListener('click', ()=> {
    sideMenu.classList.remove('visible')
})



// Pop-up Card
const card = document.querySelector('#onclick__card')
const button = document.querySelector('.pushable')
const button2 = document.querySelector('#pushable2')

const close = document.querySelector('.side_bar-close')
const main = document.querySelector('.main')

const disableScroll = document.querySelector('.body')


button.addEventListener('click', () => {
    card.classList.add('visible')
    main.classList.add('visible')
    disableScroll.classList.add('stop-scrolling')


})
button2.addEventListener('click', ()=> {
    card.classList.add('visible')
    main.classList.add('visible')
    disableScroll.classList.add('stop-scrolling')


})

close.addEventListener('click', () => {
    card.classList.remove('visible')
    main.classList.remove('visible')
    disableScroll.classList.remove('stop-scrolling')



})

main.addEventListener('click', (event) => {
    if(!button.contains(event.target)  & !button2.contains(event.target) )  {
        card.classList.remove('visible')
        main.classList.remove('visible')
        disableScroll.classList.remove('stop-scrolling')
    }
})






















