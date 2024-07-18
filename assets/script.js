function abrirMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.mobile-menu-icon button').innerHTML = "&#9776;"; 
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.mobile-menu-icon button').innerHTML = "&#10006;"; 
    }
}
