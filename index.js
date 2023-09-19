const OpenMenu = document.querySelector('button.mobile-menu-button')
const CloseMenu = document.querySelector('button.close-mobile-menu')
const menu = document.querySelector('.mobile-menu')

OpenMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});
CloseMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
});


