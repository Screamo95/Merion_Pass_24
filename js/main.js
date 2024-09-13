// Бургер меню

openBurger = document.querySelector(`.burger__open`)
closeBurger = document.querySelector(`.burger__close`)
linkBurger = document.querySelector(`.burger__nav`)
burgerMenu = document.querySelector(`.burger__menu`)

openBurger.onclick = function() {
  burgerMenu.classList.add(`burger__menu-open`)
  burgerMenu.classList.remove(`burger__menu-close`)
}

closeBurger.onclick = function() {
  burgerMenu.classList.remove(`burger__menu-open`)
  burgerMenu.classList.add(`burger__menu-close`)
}

linkBurger.onclick = function() {
  burgerMenu.classList.remove(`burger__menu-open`)
  burgerMenu.classList.add(`burger__menu-close`)
}

// Разввернуть, свернуть для блока program

let openProgram = document.querySelector(`.program__open`)
let closeProgram = document.querySelector(`.program__close`)
let blockProgram = document.querySelector(`.program__body_close`)

openProgram.onclick = function() {
  blockProgram.classList.remove(`program__visible`)
  blockProgram.classList.add(`program__start_animation`)
  blockProgram.classList.remove(`program__end_animation`)
  openProgram.classList.add(`program__visible`)
  closeProgram.classList.remove(`program__visible`)
}

closeProgram.onclick = function() {
  blockProgram.classList.remove(`program__start_animation`)
  blockProgram.classList.add(`program__end_animation`)
  openProgram.classList.remove(`program__visible`)
  closeProgram.classList.add(`program__visible`)
  setTimeout("blockProgram.classList.add(`program__visible`)", 1000)
}