// gallery-led.js

const gallery = document.querySelector('.gallery');

gallery.addEventListener('mouseenter', () => {

  let x = Math.random() * gallery.offsetWidth;
  let y = Math.random() * gallery.offsetHeight;

    gallery.style.setProperty('--ledX', x + 'px');
    gallery.style.setProperty('--ledY', y + 'px');

});