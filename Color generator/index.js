const random = document.querySelector(".color");
const change = document.querySelector("h1");
const copy = document.querySelector(".COPY");

function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

random.addEventListener('click', () => {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    change.innerHTML = color;
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(change.textContent);
    alert("Copied the text: " + change.textContent);
});
