const tummaBtn = document.querySelector('#tumma')
const vaaleaBtn = document.querySelector('#vaalea')

tummaBtn.addEventListener('click', () => {
    document.body.classList.add('tumma')
})
vaaleaBtn.addEventListener('click', () => {
    document.body.classList.remove('tumma')
})