const containers = document.querySelectorAll('.container')

containers.forEach(cont => {
    const answer = cont.querySelector('.content')
    cont.addEventListener('click', () => {
        answer.classList.toggle('active')
    })
})
