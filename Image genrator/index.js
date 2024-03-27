const images = document.querySelector(".image");
const button = document.querySelector(".color")
let count = 1;

function imageGenerator(count) {
    for (let i = count; i <= count + 4; i++) {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/300?random=${i}`;
        images.appendChild(img);
    }
}

button.textContent = "Generate Images";
button.addEventListener('click', () => {
    imageGenerator(count + 5);
});

