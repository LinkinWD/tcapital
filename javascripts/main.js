


// Wrap every letter in a span
let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// Wrap every letter in a span
let textWrapperTwo = document.querySelector('.ml13');
textWrapperTwo.innerHTML = textWrapperTwo.textContent.replace(/\S/g, "<span class='lettertwo'>$&</span>");


document.addEventListener("DOMContentLoaded", function(event) {

anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  })
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
    targets: '.ml13 .lettertwo',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 100 + 30 * i
  })
  .add({
    targets: '.nappi',
    scale: [0,1],
    duration: 600
  })

});
