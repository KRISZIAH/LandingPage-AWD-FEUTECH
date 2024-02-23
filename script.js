/*menu icon bar*/
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*sticky*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
 }); 

/*stick*/

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/*remove mune function*/
menuicon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*wrapper*/

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => {
            if(c !== card){
                c.classList.remove('active');
            }
        });

        card.classList.add('active');
    });
});

/*darkmode*/
let darkmodeicon = document.querySelector('#darkmode-icon')

darkmodeicon.onclick = () => {
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*scroll animation*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1000,
    delay:150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .slider, .project-box, .input-box, textarea, .credit-boxes', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content, .about-content, .heading-gallery p, .project-heading p, .contact-heading p', { origin: 'right' })