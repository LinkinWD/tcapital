const mode = document.querySelector('#mode')
const sektiot = document.querySelectorAll('section')
const check = document.querySelector('input[name="check"]')
const toggle = document.querySelector('.toggle')

check.addEventListener('click', () => {
  document.body.classList.toggle('tumma')
  for( let yksi of sektiot) {
      yksi.classList.toggle('tumma')
      
  }
  toggle.classList.toggle('tumma')
})
/* check.addEventListener('click', () => {
  alert('hei')
}) */

anime({
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
