const bob = document.querySelector("body");
const lol = document.querySelector(".color");

lol.addEventListener('click', () => {
    if (bob.classList.contains("jolo")) {
        bob.classList.remove("jolo");
        bob.classList.add("go");
    } else if (bob.classList.contains("go")) {
        bob.classList.remove("go");
        bob.classList.add("jolo");
    }
});
