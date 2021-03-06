

// Wrap every letter in a span
const textWrapper = document.querySelector('.ml12');
const textWrapperTwo = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperTwo.innerHTML = textWrapperTwo.textContent.replace(/\S/g, "<span class='letterTwo'>$&</span>");
const nappiTanne = document.querySelector('.nappi')

 anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 1500 + 30 * i
  })
  .add({
      targets: '.ml13 .letterTwo',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 300 + 30 * i})
    .add({
      targets: '.nappi',
      opacity: [0,1],
      
    })  ;
      
  

