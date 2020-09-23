'use strict';

// button toggle menu
const burger = document.querySelector('.usr-burger');
const menu = document.querySelector('.usr-nav__menu');

burger.onclick = function () {
  if (burger.classList.contains('usr-burger--open')) {
    burger.classList.toggle('usr-burger--close');
  } else {
    burger.classList.add('usr-burger--open');
  }

  menu.classList.toggle('usr-nav__menu--hidden');
}

// Modal Image Gallery
const gallery = document.querySelector('.usr-gallery');
const images = document.querySelectorAll('.w3-image');
const overlay = document.querySelector('.w3-overlay');

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    images[i].classList.toggle('w3-image--show');
    overlay.classList.toggle('usr-gallery__overlay--hidden');

    overlay.onclick = function () {
      overlay.classList.add('usr-gallery__overlay--hidden');
      images[i].classList.remove('w3-image--show');
    }
  };

  images[i].onkeyup = function (e) {
    if (e.keyCode === 27) {
      overlay.classList.add('usr-gallery__overlay--hidden');
      images[i].classList.remove('w3-image--show');
    } else if (e.keyCode === 13) {
      overlay.classList.remove('usr-gallery__overlay--hidden');
      images[i].classList.add('w3-image--show');
    }
  }

  images[i].onblur = function () {
    overlay.classList.add('usr-gallery__overlay--hidden');
    images[i].classList.remove('w3-image--show');
  }
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
  var navbar = document.querySelector(".usr-nav");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.className = "w3-top" + " w3-card" + " w3-white" + " usr-nav";
      menu.classList.add('w3-animate-top');
  } else {
      navbar.className = navbar.className.replace("w3-top w3-card w3-white usr-nav", "w3-top usr-nav");
      menu.classList.remove('w3-animate-top');
  }
}

// set the observer options
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

// create observer
const observer = new IntersectionObserver( entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // add an observed class to the section
      entry.target.classList.add('observed');
      // check the section's id
      document.querySelectorAll('nav a').forEach( link => {
        if(link.hash === `#${entry.target.id}`) {
          link.classList.add('w3-light-grey');
        } else {
          link.classList.remove('w3-light-grey');
        }
      });
    };
  });
}, options);
// Observe all sections that have an `id` applied
let sectionsSec = document.querySelectorAll('div[id]');

sectionsSec.forEach(section => {
  observer.observe(section);
});
