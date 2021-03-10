

  w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
// Wrap every letter in a span
const textWrapper = document.querySelector('.ml12');
const textWrapperTwo = document.querySelector('.ml13');
const textWrapperThree = document.querySelector('.ml14');
const textWrapperFour = document.querySelector('.ml15');


textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperTwo.innerHTML = textWrapperTwo.textContent.replace(/\S/g, "<span class='letterTwo'>$&</span>");
textWrapperThree.innerHTML = textWrapperThree.textContent.replace(/\S/g, "<span class='letterThree'>$&</span>");
textWrapperFour.innerHTML = textWrapperFour.textContent.replace(/\S/g, "<span class='letterFour'>$&</span>");


const nappiTanne = document.querySelector('.nappi')




if (w >= 1000) {

 anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
      targets: '.ml13 .letterTwo',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 100 + 30 * i})
   
      .add({
      targets: '.nappi',
      scale: [0,1],
      duration: 500
      
    })  ;
  } 
  else {

  anime.timeline({loop: false})
  .add({
    targets: '.ml14 .letterThree',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
      targets: '.ml15 .letterFour',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 500,
      delay: (el, i) => 100 + 30 * i})
      .add({
        targets: '.ml13 .letterTwo',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 500,
        delay: (el, i) => 500 + 30 * i}) 
      .add({
      targets: '.nappi',
      scale: [0,1],
      duration: 800
      
    })  ;
      
  
  }
