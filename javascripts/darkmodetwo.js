let darkMode = localStorage.getItem('darkMode')

const mode = document.querySelector('#mode')
const sektiot = document.querySelectorAll('section')
const check = document.querySelector('input[name="check"]')
const toggle = document.querySelector('.toggle')
const header = document.querySelector('#header')




const footer = document.querySelector('footer')




const tummaMoodiPäälle = () => {
    document.body.classList.add('tumma')
    for( let yksi of sektiot) {
        yksi.classList.add('tumma')
        
    }
    toggle.classList.add('tumma')
    header.classList.add('tumma')
    
 
    footer.classList.add('tumma')
    
    
    
    localStorage.setItem('darkMode', 'enabled')
}



const tummaMoodiPois = () => {
  document.body.classList.remove('tumma')
  for( let yksi of sektiot) {
      yksi.classList.remove('tumma')
      
  }

  toggle.classList.remove('tumma')
  header.classList.remove('tumma')
  
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
