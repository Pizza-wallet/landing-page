// enable hidden nav bar

const nav = document.querySelector('.header')
let lastScrollY = window.scrollY

window.addEventListener('scroll', () => {
    if (lastScrollY <= window.scrollY) {
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































