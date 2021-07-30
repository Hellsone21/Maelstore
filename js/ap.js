let hamburger = document.querySelector(".hamburger");
let hamburgerActive = document.querySelector(".hamburger hamburger--stand is-active");
let SideNav = document.querySelector ('.side-nav')
let SideOpen = document.querySelector ('.open')
let Burger = document.querySelector ('.burger')
let Overlay = document.querySelector ('.overlay')

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});


const openNav = document.querySelector('side-nav')
Burger.addEventListener('click',OpenAside)

Overlay.addEventListener ('click',Close)



function OpenAside() {
  SideNav.classList.add ('open')
  Overlay.classList.add ('open')
  hamburger.classList.remove("is-active");
 
}

function Close() {
  SideNav.classList.remove ('open')
  Overlay.classList.remove ('open')
}
