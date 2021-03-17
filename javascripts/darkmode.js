let darkMode = localStorage.getItem('darkMode')

const mode = document.querySelector('#mode')
const sektiot = document.querySelectorAll('section')
const check = document.querySelector('input[name="check"]')
const toggle = document.querySelector('.toggle')
const header = document.querySelector('#header')
const palvelumme = document.querySelector('#palvelumme')
const lupaus = document.querySelector('#lupauksemme')

const labels = document.querySelectorAll('label')
const footer = document.querySelector('footer')

let vaaleaLogo = document.querySelector('.image1')
let tummaLogo = document.querySelector('.image2')


const tummaMoodiPäälle = () => {
    document.body.classList.add('tumma')
    for( let yksi of sektiot) {
        yksi.classList.add('tumma')
        
    }
    vaaleaLogo.classList.add('piilota')
    tummaLogo.classList.remove('piilota')
    toggle.classList.add('tumma')
    header.classList.add('tumma')
    palvelumme.classList.add('tumma')
    lupaus.classList.add('tumma')
    
    for( let yksi of labels) {
      yksi.classList.add('tumma')
      
  }
 
    footer.classList.add('tumma')
    
    
    
    localStorage.setItem('darkMode', 'enabled')
}



const tummaMoodiPois = () => {
  document.body.classList.remove('tumma')
  for( let yksi of sektiot) {
      yksi.classList.remove('tumma')
      
  }
  tummaLogo.classList.add('piilota')
  vaaleaLogo.classList.remove('piilota')
  toggle.classList.remove('tumma')
  header.classList.remove('tumma')
  palvelumme.classList.remove('tumma')
  lupaus.classList.remove('tumma')
  
  for( let yksi of labels) {
    yksi.classList.remove('tumma')  
    }

    
    footer.classList.remove('tumma')
   
    
    localStorage.setItem('darkMode', null)
    }

    if(darkMode === 'enabled') {
        tummaMoodiPäälle()
}


check.addEventListener('click', ()=> {
    darkMode = localStorage.getItem('darkMode')
    if(darkMode !== 'enabled') {
        tummaMoodiPäälle()
    } else {
        tummaMoodiPois()
    }
} )
