const mode = document.querySelector('#mode')
const sektiot = document.querySelectorAll('section')



mode.addEventListener('click', () => {
    document.body.classList.toggle('tumma')
    for( let yksi of sektiot) {
        yksi.classList.toggle('tumma')
        console.log(yksi)
    }
})
