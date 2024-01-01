const menuBtn = document.querySelector('.menu__btn')
const menuClose = document.querySelector('.menu__close')
const menuList = document.querySelector('.menu__list')

const div = document.querySelector('.menu--close')

menuBtn.addEventListener('click', ()=>{
    // menuList.classList.add('menu__list--open')  
    menuList.classList.toggle('menu__list--open')
    div.classList.toggle('menu--open')
})

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open')
    div.classList.remove('menu--open')
})