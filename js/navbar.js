let navOpen = false;

function toggleNav() {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.getElementById('menu-icon');
    navOpen = !navOpen;
    
    if (navOpen) {
        navbar.classList.remove('-translate-x-full');
        navbar.classList.add('translate-x-0');
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    } else {
        navbar.classList.remove('translate-x-0');
        navbar.classList.add('-translate-x-full');
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
}
