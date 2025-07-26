let barra_nav = document.querySelector(".barraNav")
let menu_bt = document.querySelector(".menu")

menu_bt.addEventListener('click', () => {
    barra_nav.classList.toggle("show-menu")
})