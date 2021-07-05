// Your code goes here
// Scale logo on mouse over
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', () => {
    logo.style.transform = 'scale(1.2)';
})

// Return logo to original size with mouseleave
logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'scale(1)';
})

// change body bg royal blue on keydown
const background = document.querySelector('body');
background.addEventListener('keydown', () => {
    background.style.backgroundColor = 'royalblue';
})

// change hero img on double click
const hero_img = document.querySelector('.intro img');
hero_img.addEventListener('dblclick', () => {
    hero_img.src = 'http://images5.fanpop.com/image/photos/24800000/Strange-School-Bus-random-24864139-640-480.jpg';
})

// Turn navbar bg yellow on load
const navbar = document.querySelector('.main-navigation');
window.addEventListener('load', (event) => {
    navbar.style.background = 'yellow';
})

// Change text color to white on scroll
const text = document.querySelectorAll('.content-section .text-content');
text.forEach((el) => addEventListener('scroll', () => {
    el.style.color = 'white';
}))

// Turn destination bg blue on click
const destination = document.querySelectorAll('.destination');
destination.forEach(el => el.addEventListener('click', () => {
    el.style.background = 'blue';
}))

// Remove buttons and use stopPropagation()
const buttons = document.querySelectorAll('.destination .btn');
buttons.forEach((el) => el.addEventListener('click', (event) => {
    el.remove();
    event.stopPropagation();
}));

// Turn navbar bg white on resize
const navScroll = document.querySelector('.main-navigation');
window.addEventListener('resize', (e) => {
    navScroll.style.background = 'white';
})

// Prevent nav link from refreshing page
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(() => addEventListener('click', (e) => {
    e.preventDefault();
}))

// give navlinks a box border
navLinks.forEach((e) => addEventListener('wheel', () => {
    e.style.color = 'blue';
    e.style.border = '1px solid blue';
}))

