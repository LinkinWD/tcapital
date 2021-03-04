const mode = document.querySelector('#mode')
const sektiot = document.querySelectorAll('section')
const check = document.querySelector('input[name="check"]')
const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.navbar')
const header = document.querySelector('#header')
const palvelumme = document.querySelector('#palvelumme')
const lupaus = document.querySelector('#lupauksemme')
const grid = document.querySelector('.grid')
const labels = document.querySelectorAll('label')

check.addEventListener('click', () => {
  document.body.classList.toggle('tumma')
  for( let yksi of sektiot) {
      yksi.classList.toggle('tumma')
      
  }
  toggle.classList.toggle('tumma')
  header.classList.toggle('tumma')
  palvelumme.classList.toggle('tumma')
  lupaus.classList.toggle('tumma')
  grid.classList.toggle('tumma')
  for( let yksi of labels) {
    yksi.classList.toggle('tumma')
    
}
})
/* check.addEventListener('click', () => {
  alert('hei')
}) */

/* anime({
    targets: '.pörssi',
    keyframes: [
      {translateX: 40, translateY: 40},
      {translateX: 140, translateY: 140},
      {translateX: 240, translateY: 240},
      {translateX: 250},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });
 */
window.onscroll = function() {scrolli()}

function scrolli() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    nav.classList.remove('piilota');
  }
  else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
    nav.classList.add('piilota');
  }
}
