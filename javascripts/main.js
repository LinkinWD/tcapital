const mode = document.querySelector('#mode')
const sektiot = document.querySelectorAll('section')



mode.addEventListener('click', () => {
    document.body.classList.toggle('tumma')
    for( let yksi of sektiot) {
        yksi.classList.toggle('tumma')
        console.log(yksi)
    }
})

anime({
    targets: '.pörssi',
    keyframes: [
      {translatey: -40, translateX: -40},
      {translateX: 250},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });
