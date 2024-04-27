const navLinks = document.querySelector('.nav-links')
const togglebtn= document.querySelector('.toggle-btn')
function hide(){
    navLinks.classList.toggle('hidden')
    togglebtn.name = togglebtn.name === 'menu' ? 'close' : 'menu'

}