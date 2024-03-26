const button = document.querySelector(".color")
const pop = document.querySelector(".pop")
const pip = document.querySelector(".pip")

button.addEventListener("click",()=>{
    pop.classList.toggle('active')


})
pip.addEventListener("click",()=>{
    pop.classList.remove('active')

})