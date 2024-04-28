const navLinks = document.querySelector('.nav-links')
const togglebtn= document.querySelector('.toggle-btn')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('hidden')

        }

function hide(){
    navLinks.classList.toggle('hidden')
    togglebtn.name = togglebtn.name === 'menu' ? 'close' : 'menu'

}