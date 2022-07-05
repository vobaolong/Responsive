// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');

});

// Scroll reveal
window.screen = ScrollReveal();

screen.reveal('.animate-left', {
    origin: 'left', duration: 1000, distance: '25rem', delay: 600
});

screen.reveal('.animate-right', {
    origin: 'right', duration: 1000, distance: '25rem', delay: 600
});

screen.reveal('.animate-top', {
    origin: 'top', duration: 1000, distance: '25rem', delay: 600
}); 

screen.reveal('.animate-bottom', {
    origin: 'bottom', duration: 1000, distance: '25rem', delay: 600
}); 